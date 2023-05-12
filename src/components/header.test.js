import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Header from './header';

test('Header component renders correctly', () => {
    const tree = renderer.create(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
