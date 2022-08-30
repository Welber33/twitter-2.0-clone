import React, { SVGProps } from 'react'

interface SidebarProps {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  title: string;
}

export function SidebarRow({ Icon, title }: SidebarProps) {
  return (
    <div className="group flex max-w-fit items-center space-x-2 px-4 py-3 rounded-full transition-all duration-200 hover:bg-gray-100">
      <Icon className="w-6 h-6"/>
      <p className="group-hover:text-twitter">{title}</p>
    </div>
  )
}
