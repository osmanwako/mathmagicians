import { render, screen, cleanup, fireEvent } from "@testing-library/react";
// Importing the jest testing library
import '@testing-library/jest-dom'
import App from "./App";
import Calculator from './components/calculator';
import Home from './components/Home';
import Government from './components/government';

// afterEach function runs after each test suite is executed
afterEach(() => {
    cleanup();
})

describe('Components render Correctly', () => {
    it('Calculator renders correctly', () => {
        const tree = renderer
            .create(<Calculator />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Home renders correctly', () => {
        const tree = renderer
            .create(<Home />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Government renders correctly', () => {
        const tree = renderer
            .create(<Government />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});