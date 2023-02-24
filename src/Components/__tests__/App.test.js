import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../../App';

test('renders "Spefind" text', () => {
	const { getByText } = render(<App />);
	const linkElement = getByText(/Spefind/i);
	expect(linkElement).toBeInTheDocument();
});
