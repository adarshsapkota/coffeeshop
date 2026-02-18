import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Coffee Dhara heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/welcome to coffee dhara/i);
  expect(headingElement).toBeInTheDocument();
});
