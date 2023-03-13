import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import 'mutationobserver-shim';
import SignIn from '../Components/SignIn/SignIn';

test('should submit the form and navigate to home page', async () => {
	const email = 'test@test.com';
	const password = 'password';
	render(
		<MemoryRouter>
			<SignIn />
		</MemoryRouter>
	);

	// Fill in email and password inputs
	const emailInput = screen.getByPlaceholderText('Email address');
	fireEvent.change(emailInput, { target: { value: email } });

	const passwordInput = screen.getByPlaceholderText('Type here');
	fireEvent.change(passwordInput, { target: { value: password } });

	// Submit the form
	const submitButton = screen.getByRole('button', { name: /submit/i });
	fireEvent.click(submitButton);

	// Wait for the navigation to happen
	const navigation = await screen.findByText(/we missed you/i);
	expect(navigation).toBeInTheDocument();
});
