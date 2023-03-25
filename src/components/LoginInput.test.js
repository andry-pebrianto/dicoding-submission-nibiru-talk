/**
 * testing scenario
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginInput from "./LoginInput";

import "@testing-library/jest-dom";

describe("LoginInput component", () => {
  it("should handle email typing correctly", async () => {
    // Arrange
    await act(async () => render(<LoginInput login={() => {}} />));
    const emailInput = screen.getByPlaceholderText("Email");

    // Action
    await act(async () => userEvent.type(emailInput, "example@mail.com"));

    // Assert
    expect(emailInput).toHaveValue("example@mail.com");
  });

  it("should handle password typing correctly", async () => {
    // Arrange
    await act(async () => render(<LoginInput login={() => {}} />));
    const passwordInput = screen.getByPlaceholderText("Password");

    // Action
    await act(async () => userEvent.type(passwordInput, "secretpassword"));

    // Assert
    expect(passwordInput).toHaveValue("secretpassword");
  });

  it("should call login function when login button is clicked", async () => {
    // Arrange
    const mockLogin = jest.fn();

    await act(async () => render(<LoginInput login={mockLogin} />));
    const emailInput = screen.getByPlaceholderText("Email");
    await act(async () => userEvent.type(emailInput, "example@mail.com"));
    const passwordInput = screen.getByPlaceholderText("Password");
    await act(async () => userEvent.type(passwordInput, "secretpassword"));

    const loginButton = screen.getByRole("button", { name: "Login" });

    // Action
    await act(async () => userEvent.click(loginButton));

    // Assert
    expect(mockLogin).toBeCalledWith({
      email: "example@mail.com",
      password: "secretpassword",
    });
  });
});
