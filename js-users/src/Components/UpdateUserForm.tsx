import React from "react";
import { useLocation } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import { updateUsers } from "../API/apiCalls";
import { User } from "./ListUsers";

const UpdateUserForm = () => {
  const location = useLocation();

  const selectedUser = location.state.user;
  console.log(selectedUser);

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  React.useEffect(() => {
    fetch(
      `https://assessment-users-backend.herokuapp.com/users/${selectedUser.id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setFirstName(data.first_name);
        setLastName(data.last_name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    type UserData = {
      first_name: string;
      last_name: string;
    };

    let formData: UserData = {
      first_name: firstName,
      last_name: lastName,
    };

    updateUsers(formData, selectedUser.id);
  };

  return (
    <Form
      className="m-5 d-sm-flex flex-sm-column align-items-center"
      onSubmit={handleSubmit}
    >
      <FormGroup row>
        <Label for="firstName">First Name</Label>
        <Col>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            placeholder={firstName}
            required
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="lastName">Last Name</Label>
        <Col>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder={lastName}
            required
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col>
          <Button type="submit">Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default UpdateUserForm;
