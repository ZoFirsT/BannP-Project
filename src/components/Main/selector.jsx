import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import categoryData from './data/category.json'; // Import local JSON data

const Selector = () => {
  const [Productcategory, setCategory] = useState(categoryData);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="w-72 font-medium h-80">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white text-black w-full p-2 flex items-center justify-between rounded ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select Category"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter Category Name"
            className="placeholder:text-gray-600  p-2 outline-none"
          />
        </div>
        {Productcategory?.map((category) => (
          <li
            key={category.name}
            className={`p-2 text-sm text-gray-600  hover:bg-sky-600 hover:text-black
              ${
                category?.name?.toLowerCase() === selected?.toLowerCase() &&
                "bg-sky-600 text-black"
              }
              ${
                category?.name?.toLowerCase().startsWith(inputValue)
                  ? "block"
                  : "hidden"
              }`}
            onClick={() => {
              if (category?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(category?.name);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {category?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;
