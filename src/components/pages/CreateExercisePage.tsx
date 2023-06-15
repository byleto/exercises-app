import { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { schemas } from "../../validationSchemas/schemas";
import { delay } from "../../utils";

const CONTENT_MAX_LENGTH = 100;
const POST_EXERCISE_URL = "http://localhost:5050/api/exercise";

export const CreateExercisePage = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [content, setContent] = useState<string | null>(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [generalValidationError, setGeneralValidationError] = useState("");
  const [networkError, setNetworkError] = useState("");

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const exercise = {
      content,
      user_id: userId,
    };
    const result = schemas.createExercisePost.validate(exercise);
    const { error } = result;
    const isValid = error === undefined;
    if (!isValid) {
      setGeneralValidationError(error.message);
      return;
    }
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(exercise),
      };
      const response = await fetch(POST_EXERCISE_URL, requestOptions);
      if (response.status === 201) {
        queryClient.invalidateQueries(["exercises"]);
        setSuccessMessage("Exercise successfully created.");
        await delay(1000);
        navigate("/exercises"); //set a timeout
      } else {
        const errorMessage =
          response.status === 404
            ? `The user with the id ${userId} does not exist`
            : "A bad request was made";
        setNetworkError(errorMessage);
      }
    } catch (err: any) {
      setNetworkError(`Service unavailable ${err.message}`);
    }
  };

  const onChangeContent = (event: any) => {
    event.preventDefault();

    const exceedsMaxLength = event.target.value.length > CONTENT_MAX_LENGTH;
    if (exceedsMaxLength) {
      setValidationError(
        "The maximum length of the content should be 100 characters"
      );
      setButtonDisabled(true);
    } else {
      setContent(event.target.value);
      if (!!validationError) {
        setValidationError("");
        setButtonDisabled(false);
      }
    }
  };

  return (
    <Container>
      <h3 className="text-center mt-4">Create Exercise</h3>
      {!!successMessage ? (
        <Alert key="danger" variant="success">
          {successMessage}
        </Alert>
      ) : null}
      {!!generalValidationError || !!networkError ? (
        <Alert variant="danger">{generalValidationError || networkError}</Alert>
      ) : null}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formUserId">
          <Form.Label>User id</Form.Label>
          <Form.Control
            onChange={(e) => {
              e.preventDefault();
              setUserId(e.target.value);
            }}
            placeholder="Enter the user id"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Content</Form.Label>
          <Form.Control
            onChange={onChangeContent}
            placeholder="Enter the content"
          />
          {!!validationError ? <Form.Text>{validationError}</Form.Text> : null}
        </Form.Group>
        <Button disabled={buttonDisabled} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
