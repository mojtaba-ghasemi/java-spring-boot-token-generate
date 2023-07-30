import { i18n } from "../../boot";
import { Trans, useTranslation } from "react-i18next";
export default function Text({ value = "" }) {
  const { t } = useTranslation("", { i18n });
  return <Trans t={t}>{value}</Trans>;
}
