import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

type Posts = {
  totalPosts: number;
  postsPerPage: number;
  setCurrentPage: any;
  currentPage: number;
};

const PaginationComponent = (posts: Posts) => {
  const totalPages = Math.ceil(posts.totalPosts / posts.postsPerPage);

  const onNext = () => {
    if (posts.currentPage < totalPages) {
      posts.setCurrentPage(posts.currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (posts.currentPage > 1) {
      posts.setCurrentPage(posts.currentPage - 1);
    }
  };

  let startPage = Math.max(1, posts.currentPage - 1);
  let endPage = Math.min(posts.currentPage + 1, totalPages);

  if (endPage - startPage < 2) {
    if (startPage === posts.currentPage) {
      endPage = Math.min(startPage + 2, totalPages);
    } else {
      startPage = Math.max(endPage - 2, 1);
    }
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <>
      <Pagination
        className="d-sm-flex justify-content-center"
        data-testid="test-4"
      >
        <PaginationItem disabled={posts.currentPage === 1}>
          <PaginationLink previous onClick={onPrevious} />
        </PaginationItem>

        {pages.map((page) => (
          <PaginationItem key={page} active={page === posts.currentPage}>
            <PaginationLink onClick={() => posts.setCurrentPage(page)}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem disabled={posts.currentPage === totalPages}>
          <PaginationLink next onClick={onNext} />
        </PaginationItem>
      </Pagination>
    </>
  );
};

export default PaginationComponent;
