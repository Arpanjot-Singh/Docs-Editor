import React from 'react';
import { IconButton } from "@material-tailwind/react";
import {Button} from "@material-tailwind/react";
import { DocumentTextIcon,UserIcon,PlusIcon } from '@heroicons/react/24/solid'
import { VideoCameraIcon,LockClosedIcon,ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline'
import TextEditor from './TextEditor'
import Sidebar from './Sidebar'


const Editor = () => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col flex-grow space-y-2 bg-white">
        <header className="flex justify-between items-center p-3 pb-1 ">
          <span className="cursor-pointer">
            <DocumentTextIcon className="h-12 w-12 text-blue-500" />
          </span>
          <div className="flex-grow-0 px-2">
            <h2 className="">Document</h2>
            <div className="flex items-center text-sm space-x-4 ml-1 text-gray-600">
              <p className="options">File</p>
              <p className="options">Edit</p>
              <p className="options">View</p>
              <p className="options">Insert</p>
              <p className="options">Format</p>
              <p className="options">Tools</p>
              <p className="options">Extensions</p>
              <p className="options">Help</p>
            </div>
          </div>
          <div className="flex items-center space-x-12 ml-auto">
            <ChatBubbleBottomCenterTextIcon className="h-7 w-7 text-black-500" />
            <VideoCameraIcon className="h-7 w-7 text-black-500" />
            <Button className="flex items-center gap-3 bg-sky text-black">
              <LockClosedIcon strokeWidth={2} className="h-5 w-5" /> Share
            </Button>
          </div>
        </header>
        <div>
        <TextEditor />
        </div>
      </div>
      <Sidebar />
    </div>
  )
}

export default Editor
