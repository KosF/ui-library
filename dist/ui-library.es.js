import { jsx as t, jsxs as e, Fragment as i } from "react/jsx-runtime";
import { InfoCircleOutlined as s } from "@ant-design/icons";
import { Tooltip as c, QRCode as l, Spin as p } from "antd";
const m = "_icon_ekdli_1", d = {
  icon: m
}, f = (o) => {
  const { title: n = "", ...r } = o;
  return /* @__PURE__ */ t(
    c,
    {
      title: /* @__PURE__ */ e(i, { children: [
        /* @__PURE__ */ t(s, { className: d.icon }),
        n
      ] }),
      ...r
    }
  );
}, x = (o) => {
  const { value: n = "", ...r } = o;
  return /* @__PURE__ */ t(
    l,
    {
      value: n,
      ...r
    }
  );
}, Q = (o) => /* @__PURE__ */ t(p, { ...o });
export {
  f as Hint,
  x as QRCode,
  Q as Spinner
};
