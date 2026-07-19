import { render, screen } from '@testing-library/react';
import App from './App';

test('renders profile card with name and role', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/SHANU P/i);
  expect(nameElements.length).toBeGreaterThan(0);
  const roleElement = screen.getByText(/Python Full Stack Developer/i);
  expect(roleElement).toBeInTheDocument();
});

test('renders skills section', () => {
  render(<App />);
  const skillsHeading = screen.getByRole('heading', { name: /Tech Stack/i });
  expect(skillsHeading).toBeInTheDocument();
  const pythonTags = screen.getAllByText(/^Python$/i);
  expect(pythonTags.length).toBeGreaterThan(0);
});

test('renders projects link on home page', () => {
  render(<App />);
  const projectsLink = screen.getByText(/View Projects/i);
  expect(projectsLink).toBeInTheDocument();
});

test('renders navbar with navigation links', () => {
  render(<App />);
  const homeLink = screen.getByText(/Home/i);
  const projectsLink = screen.getByText(/^Projects$/i);
  const experienceLink = screen.getByText(/Experience/i);
  expect(homeLink).toBeInTheDocument();
  expect(projectsLink).toBeInTheDocument();
  expect(experienceLink).toBeInTheDocument();
});

test('renders contact links on home page', () => {
  render(<App />);
  const emailLink = screen.getByText(/shanualr20@gmail.com/i);
  expect(emailLink).toBeInTheDocument();
});

test('renders resume download button on home page', () => {
  render(<App />);
  const resumeButton = screen.getByText(/Download Resume/i);
  expect(resumeButton).toBeInTheDocument();
});
