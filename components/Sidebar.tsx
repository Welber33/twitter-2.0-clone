import React from 'react'

import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon
} from '@heroicons/react/outline'
import { SidebarRow } from './SidebarRow'
import { signIn, signOut, useSession } from 'next-auth/react'

export function Sidebar() {
  const { data: session } = useSession()

  return (
    <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
      <img 
      src="https://links.papareact.com/drq" 
      alt=""
      className="w-10 h-10 m-3"
      />

      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow onClick={session ? signOut : signIn} Icon={UserIcon} title={session ? 'Sign Out' : 'Sign In'}/>

      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />

      <div className="mt-2 w-[220px] py-3 text-center text-[18px] font-bold text-white bg-twitter hover:bg-twitter_dark rounded-full">
        Tweet
      </div>
    </div>
  )
}
