import axios from "axios";
import { Container, Spinner, Stack, Table } from "react-bootstrap";
import { useQuery } from "react-query";

type exercise = {
  id: string;
  user: { name: string };
  content: string;
  created_at: string;
  user_id?: string;
};

const getExercises = async () => {
  const response = await axios.get("http://localhost:5050/api/exercises/");
  return response.data;
};

export const ExerciseList = () => {
  const { data, status } = useQuery("exercises", getExercises);
  if (status === "loading") {
    return <Spinner animation="border" />;
  }

  return (
    <Container>
      <Stack>
        <h1 className="text-center mt-4">Exercises</h1>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Content</th>
              <th>Creation date</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((item: exercise, index: number) => (
              <tr key={item?.id || index}>
                <td>{item.user.name}</td>
                <td>{item.content}</td>
                <td>{item.created_at}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Stack>
    </Container>
  );
};
