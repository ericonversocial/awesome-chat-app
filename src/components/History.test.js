import React from 'react'
import { shallow } from 'enzyme'
import History from './History'

describe('History', () => {
  const mockChatList = [
    {
      id: 0,
      messageList: [
        {
          id: 0,
          time: '2019-06-07T09:28:01.467Z',
          message: 'Welcome to the chat',
          fromUser: false
        }
      ]
    }
  ]
  it('should render self and subcomponents', () => {
    const wrapper = shallow(<History chatList={mockChatList}/>)
    expect(wrapper).toMatchSnapshot()
  })
})
