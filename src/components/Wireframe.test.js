import React from 'react'
import { shallow } from 'enzyme'
import Wireframe from './Wireframe'

describe("Wireframe component", () => {
  test("it matches the snapshot", () => {
    const wrapper = shallow(<Wireframe />)
    expect(wrapper).toMatchSnapshot()
  });
});