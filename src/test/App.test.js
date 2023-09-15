import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders the screen", () => {
  render(<App />);
  expect(screen.getByText(/Memory Game/)).toBeInTheDocument();
  expect(screen.getByText(/Ok/)).toBeInTheDocument();
  expect(screen.getByText(/Restart/)).toBeInTheDocument();
  expect(screen.getByText("(C)2023")).toBeInTheDocument();
});
