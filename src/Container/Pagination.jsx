import React from "react";

export default function CustomPagination(props) {
 const { postsPerPage, totalPosts, paginate }=props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
    <nav style={{display:"flex",justifyContent:"space-evenly"}}>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    </div>
  );
};
