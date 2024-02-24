import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _____`", () => {
    render(<App />);

    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    })

    expect(topLevelHeading).toBeInTheDocument();
})

test("displays image of headshot", () => {
    render(<App />);

    const headShot = screen.getByRole("img", {
        src: 'https://imgur.com/a/FxCW8It',
        alt: /monica garcia photo/i,
    })

    expect(headShot).toBeInTheDocument();
})

test("image has source attribute", () => {
    render(<App />);

    const headShot2 = screen.getByRole("img", {
        src: 'https://imgur.com/a/FxCW8It',
        alt: /monica garcia photo/i,
    })

    expect(headShot2).toHaveAttribute('src')
})

test("displays 2nd level heading with text 'about me'", () => {
    render(<App />);

    const aboutMe = screen.getByRole("heading", {
        name: /about me/i,
        exact: false,
        level: 2,
    })

    expect(aboutMe).toBeInTheDocument();
})

test("displays paragraph with biography", () => {
    render(<App />);

    const biography = screen.getByText(/my name is monica garcia/i);

    expect(biography).toBeInTheDocument();
})

test("Has link to git hub page", () => {
    render(<App />);

    const gitHub = screen.getByText(/git hub/i);

    expect(gitHub).toBeInTheDocument();
})

test("Git Hub Link has appropriate href attribute", () => {
    render(<App />);

    const gitHubLink = screen.getByText(/git hub/i);

    expect(gitHubLink).toHaveAttribute('href', 'https://github.com/belc0011')
})

test("Has link to LinkedIn profile", () => {
    render(<App />)

    const linkedIn = screen.getByText(/linkedin/i);

    expect(linkedIn).toBeInTheDocument();
})
test("LinkedIn Link has appropriate href attribute", () => {
    render(<App />);

    const linkedInLink = screen.getByText(/linkedin/i)

    expect(linkedInLink).toHaveAttribute('href', 'www.linkedin.com/in/monica-garcia-81a7732b6')
})