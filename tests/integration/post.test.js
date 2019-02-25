import React from 'react';
import { shallow } from 'enzyme';
import PostComponent from '../../src/components/post';

describe('Page Component', () => {
  test('renders without crashing', () => {
    shallow(<PostComponent />);
  });
});
