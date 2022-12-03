import axios from "axios";
import React from "react";
import PaginationComponent from "./Pagination";
import {
  CardGroup,
  Card,
  CardBody,
  CardText,
  CardFooter,
  Button,
  Col,
  Row,
} from "reactstrap";

interface User {
  id: string;
  first_name: string;
  last_name: string;
  status: string;
  created_at: string;
  updated_at: string;
}

const defaultUsers: User[] = [];

const ListUsers = () => {
  const [users, setUsers]: [User[], (users: User[]) => void] =
    React.useState(defaultUsers);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] =
    React.useState("");
  const [currentPage, setCurrentPage]: [number, (currentPage: number) => void] =
    React.useState(1);
  const [postsPerPage, setPostsPerPage]: [
    number,
    (postsPerPage: number) => void
  ] = React.useState(10);

  React.useEffect(() => {
    axios
      .get<User[]>(
        "https://assessment-users-backend.herokuapp.com/users.json",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((e) => {
        const error =
          e.response.status === 404
            ? "Resource Not found"
            : "An unexpected error has occurred";
        setError(error);
        setLoading(false);
      });
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = users.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <CardGroup className="my-3 justify-content-center">
        {currentPosts.map((user: User) => {
          const { id, first_name, last_name, created_at } = user;
          return (
            <div
              key={id}
              style={{
                width: "18rem",
              }}
            >
              <Row>
                <Col>
                  <Card
                    body
                    color="dark"
                    inverse
                    className="m-2"
                    style={{
                      minHeight: "21rem",
                    }}
                  >
                    <CardBody>
                      <div className="mt-3">
                        <CardText>First name: {first_name}</CardText>
                        <CardText>Last name: {last_name}</CardText>
                        <CardText>Created at: {created_at}</CardText>
                      </div>
                    </CardBody>
                    <CardFooter className="mb-3">
                      <Button>Show details</Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </div>
          );
        })}
      </CardGroup>
      <PaginationComponent
        totalPosts={users.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      {error && <p className="error">{error}</p>}
    </>
  );
};

export default ListUsers;
