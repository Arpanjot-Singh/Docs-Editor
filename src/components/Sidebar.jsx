import React from 'react';
import { UserIcon,PlusIcon } from '@heroicons/react/24/solid'


const Sidebar = () => {
    return (
      <div className="flex flex-col h-full justify-between bg-white w-16">
        <div className="flex flex-col items-center space-y-8 py-4">
        <img
              src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
              className="cursor-pointer rounded-full h-10 w-10 ml-2"
            />
            <a href="https://calendar.google.com">
          <img
              src="https://play-lh.googleusercontent.com/Jsbb0EeesKUbDTl3UyDKO6sNz45RCMh7gnoI6giQcQz1f5Mj0J4TRh7Psyu53vShh-qm"
              className="cursor-pointer rounded-full h-8 w-8 ml-2"
            />
            </a>
            <a href="https://keep.google.com">
            <img
              src="https://play-lh.googleusercontent.com/9bJoeaPbGTB8Tz_h4N-p-6ReRd8vSS-frZb2tmJulaGIoTKElKj3zpmcFJvnS96ANZP5"
              className="cursor-pointer rounded-full h-10 w-10 ml-2"
            />
            </a>
            <img
              src="https://play-lh.googleusercontent.com/pjUulZ-Vdo7qPKxk3IRhnk8SORPlgSydSyYEjm7fGcoXO8wDyYisWXwQqEjMryZ_sqK2=w240-h480-rw"
              className="cursor-pointer rounded-full h-8 w-8 ml-2"
            />
            <UserIcon className="h-7 w-7 text-blue-500" />
            <a href="https://maps.google.com">
            <img
              src="https://play-lh.googleusercontent.com/Kf8WTct65hFJxBUDm5E-EpYsiDoLQiGGbnuyP6HBNax43YShXti9THPon1YKB6zPYpA"
              className="cursor-pointer rounded-full h-10 w-10 ml-2"
            />
            </a>
            <PlusIcon className="h-7 w-7 text-black-500" />
        </div>
      </div>
    );
  }
  export default Sidebar