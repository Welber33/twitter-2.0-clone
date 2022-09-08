import { RefreshIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { Tweet } from '../typings'
import { TweetBox } from './TweetBox'
import TweetComponent from '../components/Tweet'
import { fetchTweets } from '../utils/fetchTweets'
import toast from 'react-hot-toast'

interface Props {
  tweets: Tweet[]
}

export function Feed({ tweets: tweetsProp }: Props) {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsProp)
  console.log(tweets)

  async function handleRefresh() {
    const refreshToast = toast.loading('Refreshing...')

    const tweets = await fetchTweets();
    setTweets(tweets)

    toast.success('Feed Updated!', { 
      id: refreshToast
    })
  }

  return (
    <div className="col-span-7 lg:col-span-5 border-x">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold p-5 pb-0">Home</h1>
        <RefreshIcon 
        className=" mr-5 mt-5 w-8 h-8 coursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
        onClick={handleRefresh}
        />
      </div>

      <div>
        <TweetBox />
      </div>

      {/** Feed */}
      <div>
        {tweets.map(tweet => (
          <TweetComponent key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  )
}
