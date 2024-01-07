import React from "react";

function Pagination({ page, lastPage, setPage }) {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  const handleNextPage = () => {
    if (page < lastPage) {
      setPage((prevState) => prevState + 1);
      scrollTop();
    }
  };
  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevState) => prevState - 1);
      scrollTop();
    }
  };
  return (
    <div className='flex text-center justify-center p-2 gap-4 text-color-primary'>
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className='transition-all hover:text-color-accent'>
          Prev
        </button>
      )}
      <div>
        {page} of {lastPage}
      </div>
      {page >= lastPage ? null : (
        <button
          onClick={handleNextPage}
          className='transition-all hover:text-color-accent'>
          next
        </button>
      )}
    </div>
  );
}

export default Pagination;
