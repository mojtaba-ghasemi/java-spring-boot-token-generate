import { logout, toast } from "../../methods";
import { t } from "i18next";

export default function handleErrors(error) {
  const errorCodes = error?.response?.data?.status?.resultCode;
  if (errorCodes) {
    const errorCodeList = errorCodes.split("|");
    errorCodeList.forEach((value) => {
      const errorCode = value.replace(/\s/g, "");
      const errorItem = t("error." + errorCode);
      if (errorItem) {
        toast({ type: "error", text: errorItem });
      }
    });
  } else {
    const status = error?.response?.status;
    const text = status ? `Error ${status}` : "Network Error!";
    toast({ type: "error", text });
    if (status === 401) logout();
  }
}
