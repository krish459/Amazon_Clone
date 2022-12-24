import React from "react";

function Filtertab() {
  const filterItem = (catItem) => {
    // console.log(catItem);
  };

  return (
    <>
      <hr />
      <div className="mt-5 text-center main-heading">
        <div className="container">
          <div className="d-flex justify-content-around">
            <button
              className="btn btn-warning"
              onClick={() => filterItem("All")}
            >
              All
            </button>
            <button
              className="btn btn-warning"
              onClick={() => filterItem("Furniture")}
            >
              Furniture
            </button>
            <button
              className="btn btn-warning"
              onClick={() => filterItem("Books")}
            >
              Books
            </button>
            <button
              className="btn btn-warning"
              onClick={() => filterItem("Clothes")}
            >
              Clothes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filtertab;
