import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Button, Form, Input, Text } from "../../components";
import { toast } from "../../methods";
import {t} from "i18next";
  
export default function SignIn() {
  const formControls = [
    {
      label: t("sign-in.inputs.0"),
      state: "email",
      //type: "email",
      icon: "envelope",
      //rules: rules.email,
    },
    {
      label: t("sign-in.inputs.1"),
      state: "password",
      type: "password",
      //rules: rules.password,
    },
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({email:"admin", password:"admin"});
  const setIsLogged = (data) => {
    dispatch({ type: "SET_IS_LOGGED", data });
  };

  const login = () => {
    if(data.email == "admin" && data.password == "admin"){
      setIsLogged(true);
      navigate("/");      
    }
    else
      toast({ type: "error", text: "sign-in.test-user-pass-invalid" });
 
  };
  return (
    <Container className="SignIn my-auto">
      <Row>
        <Col xs="12" md="10" lg="9" xl="8">
          <Form
            onSubmit={login}
            className="row bg-white align-items-start rounded shadow-sm p-0 p-lg-3"
          >
            <Col xs="12" lg="6">
              <Row>
                <Col as="h4" xs="12" className="m-0 white-space-nowrap">
                  <Text value="sign-in.h4" />
                </Col>
                {formControls.map((item, index) => (
                  <Col key={index} xs="12">
                    <Input
                      {...item}
                      value={data[item.state]}
                      setValue={(val) =>
                        setData((p) => ({ ...p, [item.state]: val }))
                      }
                    />
                  </Col>
                ))}
 

                <Col xs="12" className="d-flex flex-center">
                  <Button
                    type="submit"
                    className="w-fit px-5"
                    label="sign-in.button"
                  />
                </Col>
              </Row>
            </Col>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
