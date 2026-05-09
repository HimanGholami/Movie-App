function Header() {
  return (
    <header className="w-[90%] mx-auto bg-dark-header-bg rounded-4xl px-12 py-4 mt-15">
      <div className="flex justify-between items-center">
        {/* Logo & nav */}
        <div className="flex items-center">
          {/* Logo */}
          <div className="w-15">
            <img src="images/js.png" alt="logo" />
          </div>
          {/* Nav */}
          <nav>
            <ul className="flex text-white gap-x-12  mr-12 text-xl">
              <li>
                <a href="">ارتباط با ما</a>
              </li>
              <li>
                <a href="">محبوب ها</a>
              </li>
              <li>
                <a href="">جدید ها</a>
              </li>
            </ul>
          </nav>
        </div>
        {/* Search & Theme Icon */}
        <div className="flex items-center">
          <div className="flex justify-between items-center bg-[#5B5C6B] w-75 h-11 ml-27 pr-7 pl-2 rounded-4xl">
            <input
              type="text"
              className="   text-white outline-0 placeholder:text-white "
              placeholder="جستجوی فیلم ..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 text-white cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <div className="flex justify-center items-center bg-white rounded-4xl size-13 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="moon"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
