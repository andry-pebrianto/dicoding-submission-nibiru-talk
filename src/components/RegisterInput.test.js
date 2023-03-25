/**
 * testing scenario
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterInput from "./RegisterInput";

import "@testing-library/jest-dom";

describe("RegisterInput component", () => {
  it("should handle name typing correctly", async () => {
    // Arrange
    await act(async () => render(<RegisterInput register={() => {}} />));
    const nameInput = screen.getByPlaceholderText("Name");

    // Action
    await act(async () => userEvent.type(nameInput, "Manusia Api"));

    // Assert
    expect(nameInput).toHaveValue("Manusia Api");
  });

  it("should handle email typing correctly", async () => {
    // Arrange
    await act(async () => render(<RegisterInput register={() => {}} />));
    const emailInput = screen.getByPlaceholderText("Email");

    // Action
    await act(async () => userEvent.type(emailInput, "example@mail.com"));

    // Assert
    expect(emailInput).toHaveValue("example@mail.com");
  });

  it("should handle password typing correctly", async () => {
    // Arrange
    await act(async () => render(<RegisterInput register={() => {}} />));
    const passwordInput = screen.getByPlaceholderText("Password");

    // Action
    await act(async () => userEvent.type(passwordInput, "secretpassword"));

    // Assert
    expect(passwordInput).toHaveValue("secretpassword");
  });

  it("should call register function when register button is clicked", async () => {
    // Arrange
    const mockRegister = jest.fn();

    await act(async () => render(<RegisterInput register={mockRegister} />));
    const nameInput = screen.getByPlaceholderText("Name");
    await act(async () => userEvent.type(nameInput, "Manusia Api"));
    const emailInput = screen.getByPlaceholderText("Email");
    await act(async () => userEvent.type(emailInput, "example@mail.com"));
    const passwordInput = screen.getByPlaceholderText("Password");
    await act(async () => userEvent.type(passwordInput, "secretpassword"));

    const registerButton = screen.getByRole("button", { name: "Register" });

    // Action
    await act(async () => userEvent.click(registerButton));

    // Assert
    expect(mockRegister).toBeCalledWith({
      name: "Manusia Api",
      email: "example@mail.com",
      password: "secretpassword",
    });
  });
});
