import React from 'react'
import { mount } from 'enzyme'
import Chat from './Chat'

describe('Chat', () => {
  it('should render self and subcomponents', () => {
    const props = {
      messageList: [
        {
          id: 0,
          time: '2019-06-07T11:22:05.032Z',
          message: 'Welcome to the chat',
          fromUser: false
        }
      ],
      messagesEnd: <div />
    }
    Element.prototype.scrollIntoView = jest.fn();
    const wrapper = mount(<Chat {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
