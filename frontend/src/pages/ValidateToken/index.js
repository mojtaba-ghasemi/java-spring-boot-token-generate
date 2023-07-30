import React, { useState, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Button, Input, Text, Form } from "../../components";
import { axios } from "../../boot";
import { t } from "i18next";

export default function ValidateToken() {

  const token = useSelector((s) => s.tokenInfo.token);

  const [formData, setformData] = useState({token:token});
  const formControls = [
    {
      state: "token",
    },
  ].map((item, index) => ({
    ...item,
    key: index,
    label: t(`validate-token.inputs.${index}`),
  }));



  const validateToken = () => {

    const url = "/v1/TokenManagement/ValidatorService/" + formData.token;

    axios.get(url).then(({ data }) => {
      //  console.log(data);
      setformData((p) => ({ ...p, isTokenValid: data.isValid }))
    });

  };



  return (
    <div className="GenerateToken">
      <h1 className="w-fit d-flex flex-center h3">
        <i className="bi bi-gear me-2" />
        <Text value="validate-token.h1" />
      </h1>

      <Row className="align-items-start mt-5">
        <Col xs="12" lg="7" xl="8" className="px-0">
          <Form
            onSubmit={validateToken}
            className="row bg-white align-items-start rounded shadow-sm p-0 p-lg-3"
          >


            {
              (formData.hasOwnProperty("isTokenValid")) &&
              <Row>
                <Col xs="12" lg="8" className="d-flex flex-center">
                  {
                    (formData.isTokenValid) ? <i class="bi bi-check2-circle text-success h2"></i> : <i class="bi bi-bug h2 text-danger"></i>
                  }
                </Col>
              </Row>
            }



            <Row>
              {formControls.map((item) => (
                <Col key={item.key} xs="12" lg="8" className="pt-4">
                  <Input {...item}
                    value={formData[item.state]}
                    setValue={(val) =>
                      setformData((p) => ({ ...p, [item.state]: val }))
                    } />
                </Col>
              ))}
            </Row>



            <Row>
              <Col xs="12" lg="8" className="d-flex flex-center pt-5">
                <Button
                  type="submit"
                  className="w-fit px-5"
                  label="generate-token.submit"
                />
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>

    </div>
  );
}
