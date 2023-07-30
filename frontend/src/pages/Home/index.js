import React from "react";
import { Col, Row } from "react-bootstrap";
import { Text } from "../../components";
import { t } from "i18next";

const formData = {
  header: t("home.header"),
  rules: [t("home.rules.0"), t("home.rules.1"), t("home.rules.2"), t("home.rules.3")],
  projectInfo: [t("home.developer"), t("home.version"), t("home.date")]
};



export default function Home() {

  return (
    <div className="Home">
      <h1 className="w-fit d-flex flex-center h3">
        <i className="bi bi-gear me-2" />
        <Text value="home.header" />
      </h1>

      <Row className="align-items-start mt-5">
        <Col xs="12" lg="7" xl="8" className="px-0 ">
          <Row
            className="row bg-white align-items-start rounded shadow-sm p-0 p-lg-3"
          >

            {formData.rules.map((item, index) => (
              <Row key={"rule_" + index}>
                <Col xs="12" lg="12">
                  {"* " + item + index}
                </Col>
              </Row>
            ))}

          </Row>
        </Col>
      </Row>

      <Row className="align-items-start mt-5">
        <Col xs="12" lg="7" xl="8" className="px-0 ">
          <Row
            className="row bg-white align-items-start rounded shadow-sm p-0 p-lg-3"
          >

            {formData.projectInfo.map((item, index) => (
              <Row key={"info_" + index}>
                <Col xs="12" lg="12">
                  {item}
                </Col>
              </Row>
            ))}

          </Row>
        </Col>
      </Row>

    </div>
  );
}
