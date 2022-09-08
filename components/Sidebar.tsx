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

      <SidebarRow Icon={HomeIcon} title="Home" onClick={function (): {} {
        throw new Error('Function not implemented.')
      } }/>
      <SidebarRow Icon={HashtagIcon} title="Explore" onClick={function (): {} {
        throw new Error('Function not implemented.')
      } }/>
      <SidebarRow Icon={BellIcon} title="Notifications" onClick={function (): {} {
        throw new Error('Function not implemented.')
      } }/>
      <SidebarRow Icon={MailIcon} title="Messages" onClick={function (): {} {
        throw new Error('Function not implemented.')
      } }/>
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" onClick={function (): {} {
        throw new Error('Function not implemented.')
      } }/>
      <SidebarRow Icon={CollectionIcon} title="Lists" onClick={function (): {} {
        throw new Error('Function not implemented.')
      } }/>
      <SidebarRow onClick={session ? signOut : signIn} Icon={UserIcon} title={session ? 'Sign Out' : 'Sign In'}/>

      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" onClick={function (): {} {
        throw new Error('Function not implemented.')
      } }/>

    </div>
  )
}
