import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

function Search() {
  const [text, handleText] = useState<string>("");
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    handleText(e.target.value);
  }
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    handleText("");
  }
  return (
    <>
      <div className="flex justify-center  items-center relative mt-10">
        <form className=" w-full flex justify-center">
          <SearchIcon className=" relative top-2.5 left-13  text-[#6c63fe] w-5 h-5" />
          <input
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Search blogs..."
            className="ml-4 pl-12 border border-gray-500 text-lg bg-transparent text-[#6c63fe] w-2/5 max-md:w-1/2 max-sm:w-3/4 rounded-lg p-2 "
          />
          <button
            className="relative right-8 bottom-0.5 cursor-pointer"
            onClick={handleClick}
          >
            <ClearIcon className="text-gray-500   hover:text-red-500" />
          </button>
        </form>
      </div>
    </>
  );
}

export default Search;
