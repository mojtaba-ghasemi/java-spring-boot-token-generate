import { t } from "i18next";
import { useEffect, useRef, useState } from "react";
import { Dropdown, FormControl } from "react-bootstrap";
import { Input } from "..";
import Text from "../Text";

export default function Select({
  label = "",
  value = "",
  items = [],
  itemLabel = "name",
  itemValue = "id",
  rules = [],
  filter = false,
  setValue = () => {},
}) {
  const select = useRef();
  const message = useRef();
  const [filterText, setFilterText] = useState("");
  const renderFilterItems = () => {
    if (filter)
      return items.filter(
        (e) =>
          e[itemLabel]
            .toLocaleLowerCase()
            .search(filterText.toLocaleLowerCase()) !== -1
      );
    return items;
  };
  const showValue = () => {
    const defaultValue = {
      [itemLabel]: "",
      [itemValue]: "",
    };
    const val =
      items.find((e) => `${e[itemValue]}` === `${value}`) ?? defaultValue;
    return t(val[itemLabel]);
  };
  const createCustomEvent = () => {
    select.current.oncheckvalid = () => {
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

  useEffect(createCustomEvent, [value]);
  useEffect(() => setFilterText(""), [value]);
  return (
    <Dropdown
      as="div"
      ref={select}
      className="Select w-100 check-valid"
      onSelect={(val) => setValue(val)}
    >
      <Dropdown.Toggle as="span">
        <Input
          rules={[]}
          readOnly
          value={showValue()}
          label={label}
          icon="chevron-down"
        />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {filter && (
          <div className="dropdown-item">
            <FormControl
              value={filterText}
              onInput={({ target }) => setFilterText(target.value)}
            />
          </div>
        )}
        {renderFilterItems().map((item, index) => (
          <Dropdown.Item key={index} eventKey={item[itemValue]}>
            <Text value={item[itemLabel]} />
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
      {rules.length !== 0 && (
        <p
          ref={message}
          className="message w-100 d-block text-danger text-start px-2 mb-0"
        ></p>
      )}
    </Dropdown>
  );
}
