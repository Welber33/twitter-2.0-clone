import React, { useState } from 'react'
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon
} from '@heroicons/react/outline'

export function TweetBox() {
  const [input, setInput] = useState<string>('')

  return (
    <div className="flex space-x-2 p-5">
      <img
      src="https://links.papareact.com/gll"
      alt="" 
      className="w-14 h-14 object-cover rounded-full mt-4"
      />

      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input 
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text" 
          placeholder="What's Happening ?"
          className="h-24 w-full text-xl outline-none placeholder:text-xl"
          />

          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-twitter">
              <PhotographIcon className="w-5 h-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <SearchCircleIcon className="w-5 h-5" />
              <EmojiHappyIcon className="w-5 h-5" />
              <CalendarIcon className="w-5 h-5" />
              <LocationMarkerIcon className="w-5 h-5" />
            </div>

            <button 
            disabled={!input}
            className="bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
          
        </form>
      </div>
    </div>
  )
}