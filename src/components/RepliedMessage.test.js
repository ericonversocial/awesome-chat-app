import React from 'react'
import { shallow } from 'enzyme'
import RepliedMessage from './RepliedMessage'

describe('RepliedMessage', () => {
  it('should render self and subcomponents', () => {
    const wrapper = shallow(<RepliedMessage key='' date='' text=''/>)
    expect(wrapper).toMatchSnapshot()
  })
})
