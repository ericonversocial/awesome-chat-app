import React from 'react'
import { shallow } from 'enzyme'
import SentMessage from './SentMessage'

describe('SentMessage', () => {
  it('should render self and subcomponents', () => {
    const wrapper = shallow(
      <SentMessage key='0' 
        date='Fri Jun 07 2019 10:28:01 GMT+0100 (British Summer Time)' 
        text='test'
      />
    )
    expect(wrapper.hasClass('MessageBubbleGroup')).toBe(true)
    expect(wrapper.find('span').at(0).text()).toBe('Sent on Fri Jun 07 2019 10:28:01 GMT+0100 (British Summer Time)')
    expect(wrapper.find('span').at(1).text()).toBe('test')
  })
})
