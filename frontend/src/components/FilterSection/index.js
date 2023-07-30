import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { cloneDeep, isEmpty } from "lodash";
import { Form, Text, Input, Button } from "..";
import { t } from "i18next";

export default function FilterSection({
  formControls = [],
  onSubmit = () => {},
  title = "filter",
  showFilterLabel = false,
  children = null,
}) {
  const [filterData, setFilterData] = useState({});
  const [activeFilterData, setActiveFilterData] = useState({});
  const filterLabels = formControls
    .map((item) => ({
      state: item.state,
      label: item.label,
      value:
        "items" in item
          ? item.items.find(
              (e) => `${e.id}` === `${activeFilterData[item.state]}`
            )?.name
          : activeFilterData[item.state],
    }))
    .filter((e) => e.value);

  const handleSubmit = () => {
    setActiveFilterData(filterData);
    onSubmit(filterData);
  };
  const handleDeleteFilter = (key = "") => {
    const newFilterData = cloneDeep(filterData);
    const newActiveFilterData = cloneDeep(activeFilterData);

    delete newFilterData[key];
    delete newActiveFilterData[key];

    setFilterData(newFilterData);
    setActiveFilterData(newActiveFilterData);

    onSubmit(newFilterData);
  };
  return (
    <Form onSubmit={handleSubmit} className="row">
      {title && (
        <h1 className="h3 col-12">
          <i className="fs-3 me-2 bi bi-filter-circle" />
          <Text value="filter" />
        </h1>
      )}
      {formControls.map((item, index) => (
        <Col key={index} xs="12" lg="6">
          {React.createElement(item.tag ?? Input, {
            ...item,
            value: filterData[item.state],
            setValue: (val) =>
              setFilterData((p) => ({ ...p, [item.state]: val })),
          })}
        </Col>
      ))}
      <Col xs="12" className="d-flex flex-center">
        <Button type="submit" label="search" className="px-4 mx-auto me-lg-0" />
      </Col>
      <Col xs="12" className="d-flex align-items-center gap-2">
        {Boolean(filterLabels.length) && (
          <React.Fragment>
            <p className="text-dark fs-5">
              <i className="bi bi-arrow-repeat me-2" />
              <Text value="ad-account-request.filtered-by" />:
            </p>
            {filterLabels.map((item, index) => (
              <button
                type="button"
                key={index}
                className="btn btn-outline-dark-gray btn-sm"
                onClick={() => handleDeleteFilter(item.state)}
              >
                {showFilterLabel && `${t(item.label)}: `}
                {t(item.value)}
                <i className="bi bi-x-lg text-danger ms-1" />
              </button>
            ))}
          </React.Fragment>
        )}
      </Col>
      <Col xs="12" className="mt-5">
        {children}
      </Col>
    </Form>
  );
}
