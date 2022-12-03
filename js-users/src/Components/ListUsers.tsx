import axios from "axios";
import React from "react";
import { Card, CardBody, CardText } from "reactstrap";

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
      .catch((ex) => {
        const error =
          ex.response.status === 404
            ? "Resource Not found"
            : "An unexpected error has occurred";
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {users.map((user: User) => (
        <Card
          className="my-2"
          color="secondary"
          style={{
            width: "18rem",
          }}
        >
          <CardBody>
            <CardText>
              <p>First name: {user.first_name}</p>
              <p>Last name: {user.last_name}</p>
              <p>Created at: {user.created_at}</p>
            </CardText>
          </CardBody>
        </Card>
      ))}
      {error && <p className="error">{error}</p>}
    </>
  );
};

export default ListUsers;
