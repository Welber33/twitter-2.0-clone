import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

export function Widgets() {
  return (
    <div className="mt-2 px-2 col-span-2 hidden lg:inline ml-2">
      <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full mt-2 mb-2 w-[269px]">
        <SearchIcon className="w-5 h-5 text-gray-400"/>
        <input 
        type="text" 
        placeholder='Search Twitter'
        className=" flex-1 outline-none bg-transparent" />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="ghost_shell88"
        options={{height: 1000}}
      />
    </div>
  )
}
