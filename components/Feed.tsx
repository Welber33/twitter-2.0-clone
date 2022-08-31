import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'
import { TweetBox } from './TweetBox'

export function Feed() {
  return (
    <div className="col-span-7 lg:col-span-5 border-x">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold p-5 pb-0">Home</h1>
        <RefreshIcon className=" mr-5 mt-5 w-8 h-8 coursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125"/>
      </div>

      <div>
        <TweetBox />
      </div>
    </div>
  )
}
