import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('renders "Overall" text', () => {
	const { getByText } = render(<App />);
	const linkElement = getByText(/Overall/i);
	expect(linkElement).toBeInTheDocument();
});
