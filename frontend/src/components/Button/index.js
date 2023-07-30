import BButtom from "react-bootstrap/Button";
import Text from "../Text";
import "./index.scss";
export default function Button({
  variant = "primary",
  outline = false,
  label = "",
  onClick = () => {},
  disabled = false,
  className = "",
  size = "md",
  width = "",
  type = "button",
  //   loading = false,
  children = null,
}) {
  const showVariant = () => {
    if (outline) {
      return `outline-${variant}`;
    }
    return variant;
  };
  return (
    <BButtom
      style={{width:width}}
      size={size}
      variant={showVariant()}
      onClick={onClick}
      disabled={disabled}
      className={`Button ${className}`}
      type={type}
    >
      <Text value={label} />
      {children}
    </BButtom>
  );
}
