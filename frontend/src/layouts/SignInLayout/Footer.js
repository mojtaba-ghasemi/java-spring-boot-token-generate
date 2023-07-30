import { Container } from "react-bootstrap";
import logo from "../../assets/logos/while-logo.svg";

export default function Footer() {
  return (
    <footer className="bg-dark">
      <Container className="d-flex flex-center py-2 row-gap-3">
        <div className="w-100 d-flex align-items-center justify-content-between">
          <img width="125" src={logo} alt="white-logo.png" />
          <span className="fs-5 text-white ">2022</span>
        </div>
      </Container>
    </footer>
  );
}
