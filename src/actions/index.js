import {
	ADD_CHAT,
	DELETE_CHAT,
	REPLY_MESSAGE,
	RESET_ACTIVE_CHAT,
	SEND_MESSAGE,
	SET_ACTIVE_CHAT,
	UPDATE_LAST_INPUT,
	UPDATE_LAST_MESSAGE,
} from '../constants/ActionTypes';

let chatId = 1
export const addChat = () => ({
	type: ADD_CHAT,
	id: chatId++,
})

export const deleteChat = id => ({
	type: DELETE_CHAT,
	id
})

export const sendMessage = (id, time, message) => ({
	type: SEND_MESSAGE,
	id,
	time,
	message
})

export const replyMessage = (id, time, message) => ({
	type: REPLY_MESSAGE,
	id,
	time,
	message
})

export const resetActiveChat = (id) => ({
	type: RESET_ACTIVE_CHAT,
	id
})

export const setActiveChat = (id) => ({
	type: SET_ACTIVE_CHAT,
	id
})

export const updateLastInput = (id, text) => ({
	type: UPDATE_LAST_INPUT,
	id,
	text
})

export const updateLastMessage = (id) => ({
	type: UPDATE_LAST_MESSAGE,
	id
})