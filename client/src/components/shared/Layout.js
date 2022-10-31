import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Projects</Navbar.Brand>
        <Navbar.Brand href="add">Add Projects</Navbar.Brand>
        <Navbar.Brand href="cohort">Cohorts</Navbar.Brand>
        <Navbar.Brand href="user">Users</Navbar.Brand>
      </Navbar>
      <Container>{props.children}</Container>
    </>
  );
};
export default Layout;