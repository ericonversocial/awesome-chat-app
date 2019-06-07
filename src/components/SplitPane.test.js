import React from 'react'
import { shallow } from 'enzyme'
import SplitPane from './SplitPane'

describe('SplitPane', () => {
  it('should render self and subcomponents', () => {
    const wrapper = shallow(<SplitPane />)
    expect(wrapper).toMatchSnapshot()
  })
})
