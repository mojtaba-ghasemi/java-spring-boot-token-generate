import React, { useEffect, useRef, useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { Button } from "..";
import { v4 as uuidv4 } from "uuid";
import renderCheckPassword from "./_renderCheckPassword";

export default function Input({
                                label = "",
                                value = "",
                                setValue = () => {},
                                rules = [() => true],
                                type = "text",
                                append = "",
                                prepend = "",
                                as = "input",
                                className = "",
                                icon = null,
                                disabled = false,
                                readOnly = false,
                                showPasswordHardness = false,
                                limitation = undefined,
                                onKeyPress = null,
                                onKeyDown = null,
                                onKeyUp = null
                              }) {
  const input = useRef();
  const message = useRef();
  const [focused, setFocused] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [RootId] = useState(uuidv4().toString());

  const handleType = () => {
    if (type === "password") return showPass ? "text" : "password";
    return type;
  };

  const createCustomEvent = () => {
    input.current.oncheckvalid = () => {
      return rules.every((rule) => {
        const isValid = rule(value ?? "");
        if (isValid !== true) {
          message.current.innerText = isValid;
        } else {
          rules.length !== 0 && (message.current.innerText = "");
        }
        return isValid === true;
      });
    };
  };
  const createKeyEvent = (e) => {

    if(e.type === 'keypress' && onKeyPress)
      onKeyPress(e);
    if(e.type === 'keydown' && onKeyDown)
      onKeyDown(e);
    if(e.type === 'keyup' && onKeyUp)
      onKeyUp(e);
  }

  const handlerInputLimitation = (limitation) => {
    document
        .getElementById(RootId)
        .getElementsByTagName("input")[0]
        .addEventListener("keypress", function (evt) {
          //limitation = "0123456789";
          if (limitation.indexOf(evt.key) !== -1) evt.preventDefault();
        });
  };

  useEffect(() => {
    input.current.classList.toggle("focused", focused);
  }, [focused]);
  useEffect(() => {
    limitation && handlerInputLimitation(limitation);
  }, [limitation]);

  useEffect(createCustomEvent, [value, rules]);

  return (
      <div
          id={RootId}
          ref={input}
          className="Input position-relative w-100 check-valid"
      >
        <InputGroup className="input-box w-100">
          {prepend}
          {React.createElement(FormControl, {
            as,
            readOnly,
            disabled,
            className,
            type: handleType(),
            value: value ?? "",
            placeholder: label,
            onFocus: () => setFocused(true),
            onBlur: () => setFocused(false),
            onInput: ({ target }) => {
              setValue(target.value);
            },
            onKeyPress:(e)=> createKeyEvent(e),
            onKeyUp:(e)=> createKeyEvent(e),
            onKeyDown:(e)=> createKeyEvent(e)
          })}
          {append}
          {type === "password" && (
              <i
                  onClick={() => setShowPass((p) => !p)}
                  className={`input-group-text d-flex flex-center fs-5 px-2 cursor-pointer icon bi bi-${
                      showPass ? "eye" : "eye-slash"
                  }`}
              />
          )}
          {icon && (
              <i
                  className={`input-group-text d-flex flex-center fs-5 px-2 icon bi bi-${icon}`}
              />
          )}
          {type === "password" && showPasswordHardness && (
              <div className="password-hardness position-absolute z-index-1 w-100 row bg-light-gray p-2 rounded shadow-sm">
                <h6 className="h6 lh-normal m-0 col-12 text-start">
                  Password strength
                </h6>
                {renderCheckPassword(value)}
              </div>
          )}
        </InputGroup>
        {rules.length !== 0 && (
            <p
                ref={message}
                className="message w-100 d-block text-danger text-start px-2 mb-0"
            ></p>
        )}
      </div>
  );
}
