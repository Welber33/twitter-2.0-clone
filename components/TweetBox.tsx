import React, { useRef, useState } from 'react'
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon
} from '@heroicons/react/outline'
import { useSession } from 'next-auth/react';

export function TweetBox() {
  const [input, setInput] = useState<string>('')
  const [image, setImage] = useState<string>('')

  const imageInputRef = useRef<HTMLInputElement>(null)

  const { data: session } = useSession();
  const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = useState<boolean>(false)

  function addImageToTweet(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault();

    if(!imageInputRef.current?.value) return;

    setImage(imageInputRef.current.value)
    imageInputRef.current.value = '';
    setImageUrlBoxIsOpen(false)
  }

  return (
    <div className="flex space-x-2 p-5">
      <img
      src={session?.user?.image || "https://links.papareact.com/gll"}
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
              <PhotographIcon 
              onClick={() => setImageUrlBoxIsOpen(!imageUrlBoxIsOpen)} 
              className="w-5 h-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" 
              />
              <SearchCircleIcon className="w-5 h-5" />
              <EmojiHappyIcon className="w-5 h-5" />
              <CalendarIcon className="w-5 h-5" />
              <LocationMarkerIcon className="w-5 h-5" />
            </div>

            <button 
            disabled={!input || !session}
            className="bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40"
            >
              Tweet
            </button>
          </div>

          {imageUrlBoxIsOpen && (
            <form className="mt-5 flex rounded-lg bg-twitter/80 py2 px-4">
              <input 
              ref={imageInputRef}
              type="text" 
              placeholder="Enter Image URL..."
              className="flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white"
              />
              <button 
              className="font-bold text-white"
              onClick={addImageToTweet}
              >
                Add Image
              </button>
            </form>
          )}

          {image && (
            <img 
            src={image}
            className="mt-10 h-40 w-full rounded-xl object-contain shadow-lg"
            />
          )}
          
        </form>
      </div>
    </div>
  )
}
