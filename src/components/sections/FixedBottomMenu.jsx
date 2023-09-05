import React, { useEffect, useState } from "react";
import {
  FaBook,
  FaPager,
  FaPeopleCarry,
  FaQuestion,
  FaSearch,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import OverLay from "../form/OverLay";

const FixedBottomMenu = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleLinkClick = () => {
    setShowOverlay((prev) => !prev);
    setTimeout(() => {
      setShowOverlay((prev) => !prev);
    }, 1000);
  };

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 rounded-t-xl max:md:max-w-2xl mx-auto  bg-gray-900 py-4 z-10 max-sm:full">
      <ul className="flex justify-between px-3 items-center">
        <li className="font-mono" onClick={handleLinkClick}>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 flex flex-col items-center"
                : "flex flex-col items-center text-white"
            }
          >
            {showOverlay && <OverLay />}
            <FaBook />
            <p className="text-[13px]  font-bold">Books</p>
          </NavLink>
        </li>
        <li
          className="font-mono  onClick={handleLinkClick}
"
        >
          <NavLink
            to="/Search"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600   flex flex-col items-center"
                : "flex flex-col items-center text-white"
            }
          >
            {showOverlay && <OverLay />}
            <FaSearch />
            <p className="text-[12px]  font-bold">Search</p>
          </NavLink>
        </li>
        <li className="font-mono" onClick={handleLinkClick}>
          <NavLink
            to="/study"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 flex flex-col items-center"
                : "flex flex-col items-center text-white"
            }
          >
            {showOverlay && <OverLay />}
            <FaPeopleCarry />
            <p className="text-[12px]  font-bold">study</p>
          </NavLink>
        </li>
        <li className="font-mono" onClick={handleLinkClick}>
          <NavLink
            to="/papers"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 flex flex-col items-center"
                : "flex flex-col items-center text-white"
            }
          >
            {showOverlay && <OverLay />}
            <FaPager />
            <p className="text-[12px]  font-bold">papers</p>
          </NavLink>
        </li>
        <li className="font-mono" onClick={handleLinkClick}>
          <NavLink
            to="/quiz"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 flex flex-col items-center"
                : "flex flex-col items-center text-white"
            }
          >
            {showOverlay && <OverLay />}
            <FaQuestion />
            <p className="text-[12px] font-bold">Quizzes</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default FixedBottomMenu;
