import React from "react";

const Inventory = () => {
  return (
    <>
      <header className="bg-white px-9 py-3 flex items-center border-b">
        {/* left */}
        <div>
          <button className="flex items-center">
            <span>Starbucks</span>
            <span className="pt-1">
              <img src="../../icons/caret-down.png" alt="" />
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
                <img src="../../icons/search.png" alt="" />
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
          <img src="../../icons/bell.png" alt="" />
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
                <img src="../../icons/caret-down.png" alt="" />
              </span>
            </button>
          </div>
        </div>
      </header>
      <main className="min-h-screen flex">
        <aside className="bg-redd-500 w-60 px-9">
          <nav className="flex flex-col gap-5 text-neutral-7 border-r h-full py-8">
            {/* home */}
            <div className="flex items-center gap-2">
              <span>
                <img src="../../icons/home.png" alt="" />
              </span>
              <span>Dashboard</span>
            </div>

            {/* inventory */}
            <div className="flex items-center gap-2 text-primary-color">
              <span>
                <img src="../../icons/inventory.png" alt="" />
              </span>
              <span>Inventory</span>
            </div>

            {/* documents */}
            <div className="flex items-center gap-2">
              <span>
                <img src="../../icons/home.png" alt="" />
              </span>
              <span>Documents</span>
            </div>

            {/* settings */}
            <div className="flex items-center gap-2">
              <span>
                <img src="../../icons/setting.png" alt="" />
              </span>
              <span>Settings</span>
            </div>
          </nav>
        </aside>

        <article className="grow bg-greenn-500 pr-9">
          this is table part
          <div className="relative overflow-x-auto border sm:rounded-lg mt-10 bg-white">
            <div className="p-4">
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for items"
                />
              </div>
            </div>
            <table className="w-full text-base text-left text-neutral-9">
              <thead className="font-thin text-xs text-neutral-9 bg-[#FDF4ED]">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date Update
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Details
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Unit Price
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="px-6 py-4">11 Nov 2021</td>
                  <td className="px-6 py-4">Hammer</td>
                  <td className="px-6 py-4">This is hammer to do work with</td>
                  <td className="px-6 py-4 flex items-center gap-2">
                    Alright
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold">200</span>/300
                  </td>
                  <td className="px-6 py-4">$10</td>
                  <td className="px-6 py-4">$2000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </main>
    </>
  );
};

export default Inventory;
