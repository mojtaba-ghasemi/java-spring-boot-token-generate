import "./index.scss";
export default function Loading() {
  return (
    <div className="Loading position-fixed w-100 h-100 top-0 left-0 d-flex flex-center">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
