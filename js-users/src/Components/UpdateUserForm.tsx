import { stat } from "fs";
import React from "react";
import { useLocation } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import { updateUsers } from "../API/apiCalls";

const UpdateUserForm = () => {
  const location = useLocation();

  const selectedUser = location.state.user;
  console.log(selectedUser);

  const [firstName, setFirstName]: [string, (firstName: string) => void] =
    React.useState("");
  const [lastName, setLastName]: [string, (lastName: string) => void] =
    React.useState("");
  const [status, setStatus]: [string, (status: string) => void] =
    React.useState("");

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
        setStatus(data.status);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const otherStatusOption = () => {
    let newStatus = "";

    if (selectedUser.status === "active") {
      newStatus = "locked";
    }
    if (selectedUser.status === "locked") {
      newStatus = "active";
    }

    return newStatus;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    type UserData = {
      first_name: string;
      last_name: string;
      status: string;
    };

    let formData: UserData = {
      first_name: firstName,
      last_name: lastName,
      status: status,
    };

    updateUsers(formData, selectedUser.id);
  };

  return (
    <div className="wrapper">
      <Form className="formContainer m-5" onSubmit={handleSubmit}>
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
          <Label for="status">Status</Label>
          <Col>
            <Input
              type="select"
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value={status}>{status}</option>
              <option value={otherStatusOption()}>{otherStatusOption()}</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row></FormGroup>
        <FormGroup row>
          <Col>
            <Button type="submit">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default UpdateUserForm;
