const required = [(val = "") => val.length !== 0 || "Input is required."];

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const email = [
  ...required,
  (val = "") => emailRegex.test(val) || "Invalid email.",
];

const password = [
  ...required,
  (val = "") => /[a-z]/.test(val) || "1 lowercase letter.",
  (val = "") => /[A-Z]/.test(val) || "1 uppercase letter.",
  (val = "") => /[0-9]/.test(val) || "1 number.",
  (val = "") =>
    (val.length >= 8 && val.length <= 25) || "Between 8 and 25 characters.",
];
const onlyText = [
  ...required,
  (val = "") =>
    /^[A-Za-z\s]+$/i.test(val) || "Only values from a to z are acceptable.",
];
const nothing = [() => true];
const rules = {
  email,
  required,
  password,
  onlyText,
  nothing,
};
export default rules;
