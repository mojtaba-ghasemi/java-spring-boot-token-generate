import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Text, Form } from "../../components";
import { axios } from "../../boot";
import { string2IntArray } from "../../methods/jsStringHelper";
import { t } from "i18next";

export default function GenerateToken() {

  const dispatch = useDispatch();
  const availableDigit = useSelector((s) => s.tokenInfo.availableDigit);
  const token = useSelector((s) => s.tokenInfo.token);

  const formControls = [
    {
      state: "availableDigits",
    },
    {
      state: "token",
      readOnly: true
    },
  ].map((item, index) => ({
    ...item,
    key: index,
    label: t(`generate-token.inputs.${index}`),
  }));

  const setToken = (data) => {
    dispatch({ type: "SET_TOKEN", data });
  };
  const setAvailableDigit = (data) => {
    dispatch({ type: "SET_AVAILABLE_DIGITS", data });
  };

  const generateToken = () => {

    var availableDigits = string2IntArray(availableDigit, ',');

    const url = "/v1/TokenManagement/GeneratorService";
    const body = { "availableDigits": availableDigits };

    axios.post(url, body).then(({ data }) => {
      console.log(data);
      setToken(data.token);
    });

  };



  return (
    <div className="GenerateToken">
      <h1 className="w-fit d-flex flex-center h3">
        <i className="bi bi-gear me-2" />
        <Text value="generate-token.h1" />
      </h1>

      <Row className="align-items-start mt-5">
        <Col xs="12" lg="7" xl="8" className="px-0">
          <Form
            onSubmit={generateToken}
            className="row bg-white align-items-start rounded shadow-sm p-0 p-lg-3"
          >

            {
              (token) &&
              <Row>
                {formControls.filter(x => x.readOnly).map((item) => (
                  <Col key={item.key} xs="12" lg="8" className="d-flex flex-center">
                    <label className="p-3 mb-2 bg-success text-white rounded shadow-sm">
                      {token}
                    </label>
                  </Col>
                ))}
              </Row>
            }


            <Row>
              {formControls.filter(x => !x.readOnly).map((item) => (
                <Col key={item.key} xs="12" lg="8" className="pt-4">
                  <Input {...item}
                    value={availableDigit}
                    setValue={(val) =>
                      setAvailableDigit(val)
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
