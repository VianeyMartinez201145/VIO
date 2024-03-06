import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Paginate({ pages, page, keyword = "", isAdmin = false }) {
  if (keyword) {
    keyword = keyword.split("?keyword=")[1].split("&")[0];
  }

  const maxPagesToShow = 10; // Número máximo de páginas a mostrar

  let startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(startPage + maxPagesToShow - 1, pages);

  // Ajustar el inicio si el rango está incompleto
  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  return (
    pages > 1 && (
      <Pagination>
        <LinkContainer
          to={
            !isAdmin
              ? `/?keyword=${keyword}&page=${page - 1}`
              : `/admin/productlist/?keyword=${keyword}&page=${page - 1}`
          }
        >
          <Pagination.Prev disabled={page === 1} />
        </LinkContainer>

        {[...Array(endPage - startPage + 1).keys()].map((x) => (
          <LinkContainer
            key={startPage + x}
            to={
              !isAdmin
                ? `/?keyword=${keyword}&page=${startPage + x}`
                : `/admin/productlist/?keyword=${keyword}&page=${startPage + x}`
            }
          >
            <Pagination.Item active={startPage + x === page}>
              {startPage + x}
            </Pagination.Item>
          </LinkContainer>
        ))}

        <LinkContainer
          to={
            !isAdmin
              ? `/?keyword=${keyword}&page=${page + 1}`
              : `/admin/productlist/?keyword=${keyword}&page=${page + 1}`
          }
        >
          <Pagination.Next disabled={page === pages} />
        </LinkContainer>
      </Pagination>
    )
  );
}

export default Paginate;
