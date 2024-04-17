import React from 'react';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="flex border-t-2 border-[#D3D3D3]">
    <input
      className="focus:outline-none border-none rounded-none p-[2%] w-[80%] text-[1.2rem]"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="!text-white hover:bg-black cursor-pointer uppercase bg-blue-900 p-[20px] inline-block border-none w-[20%] " onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default Input;