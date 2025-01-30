import React, { useState } from 'react'
import {
  Home01Icon as HomeIcon,
  UserIcon,
  Search01Icon as SearchIcon,
  Folder01Icon as FolderIcon,
  File01Icon as FileTextIcon,
  ChartBarLineIcon as BarChartIcon,
  FavouriteIcon as FavoriteIcon,
  Settings01Icon as SettingsIcon,
  Logout01Icon as LogOutIcon,
  SidebarLeftIcon
} from 'hugeicons-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

import { useAppInformation } from '@/contexts/AppInformationContext'

const Sidebar: React.FC = () => {
  const { name } = useAppInformation()
  const [activeLink, setActiveLink] = useState<string>('Dashboard')
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const links = [
    { href: '#', label: 'Dashboard', icon: <HomeIcon size={20} /> },
    { href: '#', label: 'Terminology', icon: <FileTextIcon size={20} /> },
    { href: '#', label: 'Search Terms', icon: <SearchIcon size={20} /> },
    { href: '#', label: 'Categories', icon: <FolderIcon size={20} /> },
    { href: '#', label: 'Insights', icon: <BarChartIcon size={20} /> },
    {
      href: '#',
      label: 'Favorites',
      badge: 120,
      icon: <FavoriteIcon size={20} />
    },
    { href: '#', label: 'Profile', icon: <UserIcon size={20} /> },
    { href: '#', label: 'Settings', icon: <SettingsIcon size={20} /> }
  ]
  return (
    <aside
      className={`fixed left-0 top-0 h-full dark:bg-gray-800 text-white flex flex-col justify-between items-center min-h-screen bg-white shadow-md transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="w-full flex flex-col">
        <div
          className={`flex items-center justify-between h-16 px-4 ${
            isCollapsed && '!justify-center'
          }`}
        >
          <a href="/">
            <img
              src="/logo-crop.svg"
              alt={name}
              className={`h-6 w-auto ${isCollapsed && 'hidden'}`}
            />
          </a>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-gray-700 hover:text-blue-500"
          >
            <SidebarLeftIcon size={20} />
          </button>
        </div>
        <nav className="flex-1 py-2 px-4">
          {links.map((link, index) => (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="w-full">
                  <a
                    key={index}
                    href={link.href}
                    onClick={() => setActiveLink(link.label)}
                    className={`flex items-center p-3 rounded-md ${
                      activeLink === link.label
                        ? 'bg-blue-50 text-blue-500 border-l-4 border-blue-500'
                        : 'text-gray-700 hover:text-blue-500'
                    } transition-all duration-200`}
                  >
                    <span
                      className={`mr-3 ${
                        activeLink === link.label ? 'text-blue-500' : ''
                      }`}
                    >
                      {link.icon}
                    </span>
                    {!isCollapsed ? (
                      link.label
                    ) : (
                      <>
                        <TooltipContent>{link.label}</TooltipContent>
                      </>
                    )}
                    {link.badge && !isCollapsed && (
                      <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                        {link.badge}
                      </span>
                    )}
                  </a>
                </TooltipTrigger>
              </Tooltip>
            </TooltipProvider>
          ))}
        </nav>
        <div className="px-4 py-4 border-t">
          <a
            href="#"
            className={`flex items-center text-red-500 hover:text-red-600 ml-3 ${
              isCollapsed && 'justify-center ml-0'
            }`}
          >
            <LogOutIcon size={20} className="mr-3" />
            {!isCollapsed && 'Log out'}
          </a>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
