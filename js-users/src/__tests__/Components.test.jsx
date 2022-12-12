import ListUsers from "../Components/ListUsers";
import { render, screen, cleanup } from "@testing-library/react";
import CreateUserForm from "../Components/CreateUserForm";
import Navigation from "../Components/Navbar";
import PaginationComponent from "../Components/Pagination";

test("should render the component", () => {
  render(<ListUsers />);
  const listUsersElement = screen.getByTestId("test-1");
  expect(listUsersElement).toBeInTheDocument();
});

test("should render the component", () => {
  render(<CreateUserForm />);
  const createUsersElement = screen.getByTestId("test-2");
  expect(createUsersElement).toBeInTheDocument();
});

test("should render the component", () => {
  render(<Navigation />);
  const navbarElement = screen.getByTestId("test-3");
  expect(navbarElement).toBeInTheDocument();
});

test("should render the component", () => {
  render(<PaginationComponent />);
  const paginationElement = screen.getByTestId("test-4");
  expect(paginationElement).toBeInTheDocument();
});
