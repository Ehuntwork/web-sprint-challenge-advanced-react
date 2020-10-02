import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.getByText(/checkout form/i)
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    //render page
    render(<CheckoutForm/>)
    //click checkout
    const checkoutButton = screen.getByText(/^checkout$/i)
    fireEvent.click(checkoutButton)
    // sucessMessage there?
    const successMessage = screen.getAllByTestId('successMessage')
});
