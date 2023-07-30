import hotToast from "react-hot-toast";
import { t } from "i18next";
export default function toast({
  text = "",
  type = "success",
  duration = 5000,
}) {
  const color = type === "error" ? "var(--bs-danger)" : "var(--bs-success)";
  hotToast[type](t(text), {
    duration,
    style: {
      borderRadius: "0.3rem",
      background: "var(--bs-light)",
      whiteSpace: "pre-wrap",
      color,
    },
  });
}
