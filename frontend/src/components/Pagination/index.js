import "./index.scss";
export default function Pagination({
  totalPages = 1,
  activePage = 1,
  setActivePage = () => {},
}) {
  const min = 1;
  const max = Math.ceil(totalPages);
  // const showItemsLen = 2;

  // // const renderItems = () => {
  // //   const items = [];
  // //   for (let i = min; i <= max; i++) {
  // //     const conditions = [
  // //       i === min,
  // //       i === max,
  // //       i >= activePage - showItemsLen && i <= activePage + showItemsLen,
  // //     ];
  // //     const isActive = activePage === i;
  // //     const className = [
  // //       "border-0",
  // //       "rounded-pill",
  // //       isActive ? "bg-primary" : "bg-transparent",
  // //       isActive ? "bg-opacity-10" : "",
  // //       isActive ? "text-primary" : "text-secondary",
  // //     ].join(" ");
  // //     const element = conditions.some((e) => e)
  // //       ? () => (
  // //           <button
  // //             type="button"
  // //             className={className}
  // //             onClick={() => setActivePage(i)}
  // //           >
  // //             {i}
  // //           </button>
  // //         )
  // //       : i <= activePage + showItemsLen
  // //       ? "prev"
  // //       : "next";
  // //     items.push(element);
  // //   }
  // //   const Ellipsis = () => <span className="text-secondary">...</span>;
  // //   return [...new Set(items)].map((Item, index) => {
  // //     if (Item === "prev" || Item === "next") return <Ellipsis key={index} />;
  // //     return <Item key={index} />;
  // //   });
  // // };

  return (
    totalPages > 1 && (
      <div className="Pagination pagination mt-3 w-fit mx-auto d-flex fs-5 flex-center">
        {/* <button
          type="button"
          disabled={activePage === 1}
          className="bi bi-arrow-left text-primary p-0 border-0 bg-transparent"
          onClick={() => setActivePage(activePage - 1)}
        /> */}
        {/* {renderItems()} */}
        <button
          type="button"
          className={`page-item ${activePage === 1 ? "disabled" : ""}`}
          disabled={activePage === 1}
          onClick={() => setActivePage(activePage - 1)}
        >
          <span className="page-link">&laquo;</span>
        </button>
        <button type="button" className="active-page page-item">
          <span className="page-link">{activePage} &nbsp;{'of'}&nbsp; {Math.ceil(totalPages)}</span>
        </button>
        <button
          type="button"
          className={`page-item ${activePage === max ? "disabled" : ""}`}
          disabled={activePage === max}
          onClick={() => setActivePage(activePage + 1)}
        >
          <span className="page-link">&raquo;</span>
        </button>
        {/* <button
          type="button"
          disabled={activePage === max}
          className="bi bi-arrow-right text-primary p-0 border-0 bg-transparent"
          onClick={() => setActivePage(activePage + 1)}
        /> */}
      </div>
    )
  );
}
