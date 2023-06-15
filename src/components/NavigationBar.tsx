import Nav from "react-bootstrap/Nav";

export const NavigationBar = () => {
  return (
    <Nav variant="pills">
      <Nav.Item>
        <Nav.Link href="/" eventKey="1" title="Item">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/exercises" eventKey="2" title="Item">
          Exercises
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/create" eventKey="3" title="Item">
          Create
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
