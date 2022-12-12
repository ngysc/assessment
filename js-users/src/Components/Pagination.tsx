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
    <>
      <Pagination
        className="d-sm-flex justify-content-center"
        data-testid="test-4"
      >
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
    </>
  );
};

export default PaginationComponent;
