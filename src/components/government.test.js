import React from 'react';
import renderer from 'react-test-renderer';
import Government from './government';

test('Government component renders correctly', () => {
    const tree = renderer.create(<Government />).toJSON();
    expect(tree).toMatchSnapshot();
});
