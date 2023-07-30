import { Col } from "react-bootstrap";
import { checkPassword } from "../../methods";
export default function renderCheckPassword(password = "") {
  const elements = [];
  const conditionsLabel = [
    "At least 1 uppercase letter.",
    "1 lowercase letter.",
    "1 number.",
    "Between 8 and 25 characters.",
  ];
  const { color, hardness, conditions } = checkPassword(password);
  for (let i = 0; i < 4; i++) {
    const element = (
      <Col key={i} xs="3" className="px-1 text-center">
        <div
          style={{ height: "5px" }}
          className="bg-secondary rounded-pill w-100 overflow-hidden position-relative"
        >
          <span
            style={{ width: i < hardness ? "100%" : "0" }}
            className={`position-absolute transition-500 top-0 left-0 h-100 bg-${color}`}
          />
        </div>
      </Col>
    );
    elements.push(element);
  }
  elements.push(
    <Col key={4} xs="12" className="text-start">
      <ul className="ps-2">
        {conditionsLabel.map((item, index) => (
          <li
            key={index}
            className={`fs-7 text-${conditions[index] ? "success" : "danger"}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </Col>
  );
  return elements;
}
