import { render, screen } from '@testing-library/react';
import StudentDashboard from '../src/components/Dashboard/StudentDashboard';
import PlacementDashboard from '../src/components/Dashboard/PlacementDashboard';

test('renders student dashboard', () => {
    render(<StudentDashboard />);
    const dashboardText = screen.getByText(/student dashboard/i);
    expect(dashboardText).toBeInTheDocument();
});

test('renders placement dashboard', () => {
    render(<PlacementDashboard />);
    const dashboardText = screen.getByText(/placement dashboard/i);
    expect(dashboardText).toBeInTheDocument();
});
