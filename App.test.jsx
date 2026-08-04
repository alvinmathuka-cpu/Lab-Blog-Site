import { render, screen } from "@testing-library/react";
import App from "./App";
import blog from "./blog";

test("renders the blog name", () => {
  render(<App />);

  expect(screen.getByText(blog.name)).toBeInTheDocument();
});

test("renders the blog description", () => {
  render(<App />);

  expect(screen.getByText(blog.about)).toBeInTheDocument();
});
