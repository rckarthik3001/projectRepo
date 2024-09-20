import { render, screen } from '@testing-library/react';
import Home from '../src/pages/Home';
import Students from '../src/pages/Students';
import Placements from '../src/pages/Placements';

test('renders home page', () => {
    render(<Home />);
    const homeText = screen.getByText(/welcome to the placement management system/i);
    expect(homeText).toBeInTheDocument();
});

test('renders students page', () => {
    render(<Students />);
    const studentDashboardText = screen.getByText(/student dashboard/i);
    expect(studentDashboardText).toBeInTheDocument();
});

test('renders placements page', () => {
    render(<Placements />);
    const placementDashboardText = screen.getByText(/placement dashboard/i);
    expect(placementDashboardText).toBeInTheDocument();
});
