import React from 'react'
import { shallow } from 'enzyme'
import ChatCard from './ChatCard'

describe('ChatCard', () => {
  it('should render self and subcomponents', () => {
    const wrapper = shallow(<ChatCard />)
    expect(wrapper).toMatchSnapshot()
  })
})
