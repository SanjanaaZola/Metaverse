import { userInfo } from 'os'
import React from 'react'
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis'
import SendMessage from './SendMessage'

function Messages() {
  const { user } = useMoralis()
  return (
    <div className="pb-60">
      <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
      </div>
      <div>{/* messages */}</div>
      <div>
        <SendMessage />
      </div>
      <div className="mt-5 text-center text-gray-400">
        <p>You're up to date {user.getUsername()}!✨</p>
      </div>
      <h1>messages</h1>
    </div>
  )
}

export default Messages
