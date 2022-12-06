import axios from "axios";
import { useState } from "react";
import { Col, Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { createUser } from "../API/apiCalls";

type UserData = {
  first_name: string;
  last_name: string;
  status: string;
};

const CreateUserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("");
  const [firstNameValidation, setFirstNameValidation] = useState(false);
  const [lastNameValidation, setLastNameValidation] = useState(false);

  function handleSubmit(e: any) {
    e.preventDefault();

    let formData: UserData = {
      first_name: firstName,
      last_name: lastName,
      status: status,
    };

    createUser(formData);
  }

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
            placeholder="Please enter a first name!"
            required
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            onMouseDown={() => {
              setFirstNameValidation(true);
            }}
            onInput={() => {
              setFirstNameValidation(false);
            }}
          />
          {firstNameValidation && (
            <Alert color="warning">Please enter a first name!</Alert>
          )}
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="lastName">Last Name</Label>
        <Col>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Please enter a last name!"
            required
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            onMouseDown={() => {
              setLastNameValidation(true);
            }}
            onInput={() => {
              setLastNameValidation(false);
            }}
          />
          {lastNameValidation && (
            <Alert color="warning">Please enter a last name!</Alert>
          )}
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
            <option value={"active"}>active</option>
            <option value={"locked"}>locked</option>
          </Input>
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

export default CreateUserForm;
