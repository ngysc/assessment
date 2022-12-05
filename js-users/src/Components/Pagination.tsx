import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

interface Posts {
  totalPosts: number;
  postsPerPage: number;
  setCurrentPage: any;
  currentPage: number;
}

const PaginationComponent = (posts: Posts) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(posts.totalPosts / posts.postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      <Pagination className="d-flex justify-content-center">
        {pages.map((page, index) => {
          return (
            <PaginationItem>
              <PaginationLink
                key={index}
                onClick={() => posts.setCurrentPage(page)}
                className={page === posts.currentPage ? "active" : ""}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
