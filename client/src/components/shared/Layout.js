import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Projects</Navbar.Brand>
        <Navbar.Brand href="add">Add Projects</Navbar.Brand>
        <Navbar.Brand href="cohort">Cohort</Navbar.Brand>
      </Navbar>
      <Container>{props.children}</Container>
    </>
  );
};
export default Layout;