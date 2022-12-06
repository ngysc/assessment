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
import { getUsers } from "../API/apiCalls";
import { useNavigate } from "react-router-dom";

export interface User {
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
  const [currentPage, setCurrentPage]: [number, (currentPage: number) => void] =
    React.useState(1);
  const [postsPerPage, setPostsPerPage]: [
    number,
    (postsPerPage: number) => void
  ] = React.useState(10);
  const navigate = useNavigate();

  React.useEffect(() => {
    getUsers(setUsers);
    console.log(users);
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = users.slice(firstPostIndex, lastPostIndex);

  const handleClick = (user: User) => {
    navigate("/edit", { state: { user: user } });
  };

  return (
    <div>
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
                      <Button onClick={() => handleClick(user)}>
                        Edit user
                      </Button>
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
    </div>
  );
};

export default ListUsers;
