export default function checkPassword(val = "") {
  const con1 = /[A-Z]/.test(val);
  const con2 = /[a-z]/.test(val);
  const con3 = /[0-9]/.test(val);
  const con4 = val.length >= 8 && val.length <= 25;

  const conditions = [con1, con2, con3, con4];
  const colors = [
    {
      label: null,
      color: "dark",
    },
    {
      label: "خیلی ضعیف",
      color: "danger",
    },
    {
      label: "ضعیف",
      color: "orange",
    },
    {
      label: "متوسط",
      color: "warning",
    },
    {
      label: "مناسب",
      color: "success",
    },
  ];

  const hardness = conditions.filter((e) => e).length;
  const color = colors[hardness].color;
  const label = colors[hardness].label;
  return {
    conditions,
    hardness,
    color,
    label,
  };
}
// const colors = [
//   {
//     label: null,
//     color: "dark",
//   },
//   {
//     label: "1 حرف بزرگ",
//     color: "danger",
//   },
//   {
//     label: "1 حرف کوچک",
//     color: "orange",
//   },
//   {
//     label: "یک عدد",
//     color: "warning",
//   },
//   {
//     label: "حداقل 8",
//     color: "success",
//   },
// ];
