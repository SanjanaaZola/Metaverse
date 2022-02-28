import React from 'react'
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar'

function Message({ message }) {
  const { user } = useMoralis()
  const isUserMessage = message.get('ethAddress') === user.get('ethAddress')
  return (
    <div
      className={`relative flex items-end space-x-2 ${
        isUserMessage && 'justify-end'
      } `}
    >
      <div className={`relative h-8 w-8 ${isUserMessage && 'order-last ml-2'}`}>
        <Avatar username={message.get('username')} />
      </div>
      <div
        className={`m-4 flex space-x-4 rounded-lg p-2 ${
          isUserMessage
            ? 'rounded-br-none bg-pink-300'
            : 'rounded-bl-none bg-blue-400'
        }`}
      >
        <p>{message.get('message')}</p>
      </div>

      <p
        className={`absolute -bottom-5 text-xs ${
          isUserMessage ? 'text-pink-300' : 'text-blue-400'
        }`}
      >
        {message.get('username')}
      </p>
    </div>
  )
}
export default Message
