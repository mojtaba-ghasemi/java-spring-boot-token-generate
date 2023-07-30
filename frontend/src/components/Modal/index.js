import { useEffect, useRef } from "react";
import Text from "../Text";
import "./index.scss";
export default function Modal({
  show = true,
  bodyFullSize = true,
  onHide = () => {},
  variant = "primary",
  title = null,
  children = null,
  size = "md",
    headerClassName = ""
}) {
  const modal = useRef();
  const handleShow = () => {
    modal.current.classList.toggle("show", show);
  };
  useEffect(handleShow, [show]);
  return (
    <div
      ref={modal}
      className="Modal modal position-fixed d-flex flex-center overflow-hidden p-2 transition"
    >
      <button
        className="hide-btn position-absolute top-0 left-0 w-100 h-100 d-block opacity-0"
        onClick={() => onHide(false)}
      />
      <div
        className={`dialog modal-dialog p-2 modal-${size} border border-light-gray bg-white rounded shadow-sm position-relative transition overflow-auto`}
      >
        {title && (
          <div
            style={{ borderRadius: "0.5rem 0.5rem 0 0" }}
            className= {
              (headerClassName!="")?headerClassName: "header w-100 d-flex flex-center text-start border border-secondary px-3 px-lg-5 py-3"
            }
          >
            <div className={`title w-100 fs-5 text-${variant}`}>
              <Text value={title} />
            </div>
          </div>
        )}
        <div className={`body ${bodyFullSize ? "" : "px-3 px-lg-5 py-1"}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
