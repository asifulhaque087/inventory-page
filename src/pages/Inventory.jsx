import React from "react";
import UilAngleDown from "@iconscout/react-unicons/icons/uil-angle-down";
import UilSearch from "@iconscout/react-unicons/icons/uil-search";
import UilBell from "@iconscout/react-unicons/icons/uil-bell";

const Inventory = () => {
  return (
    <>
      <header className="bg-white px-9 py-3 flex items-center border-b">
        {/* left */}
        <div>
          <button className="flex items-center">
            <span>Starbucks</span>
            <span className="pt-1">
              <UilAngleDown />
            </span>
          </button>
        </div>
        {/* center */}
        <div className="ml-32 hidden sm:block basis-96">
          <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <UilSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full pl-10 p-2.5"
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>
        {/* right */}
        <div className="ml-auto flex items-center gap-2">
          {/* bell */}
          <UilBell className="w-10 h-10 text-gray-500 dark:text-gray-400" />
          {/* avatar */}
          <div className="w-full flex items-center gap-2">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="avatar"
              className="h-10 w-10 rounded-full"
            />
            <button className="flex items-center whitespace-nowrap">
              <span>John Doe</span>
              <span className="pt-1">
                <UilAngleDown />
              </span>
            </button>
          </div>
        </div>
      </header>
      {/* <main>
        <aside>
            this is sidebar
        </aside>

        <article>this is table part</article>
      </main> */}
    </>
  );
};

export default Inventory;
