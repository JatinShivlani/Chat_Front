import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="flex justify-center text-center md:h-[100vh] h-full items-center bg-gray-900">
      <div className="md:w-[20%] w-1/2">
        <h1 className="text-white text-4xl uppercase font-medium pb-[10px] border-b-2 ">Join</h1>
        <div>
          <input placeholder="Name" className="rounded-none px-[10px] py-[15px] w-full" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="rounded-none px-[10px] py-[15px] w-full mt-[20px]" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'text-white uppercase bg-blue-900 hover:bg-black cursor-pointer p-[20px] rounded-md inline-block border-2 border-blue-900 w-full mt-[20px]'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}
