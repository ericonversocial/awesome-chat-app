import React from 'react'
import { shallow } from 'enzyme'
import DeleteButton from './DeleteButton'

describe('DeleteButton', () => {
  it('should render self and subcomponents', () => {
    const wrapper = shallow(<DeleteButton />)
    expect(wrapper).toMatchSnapshot()
  })
})
