import React from "react";
import { FaBook, FaPager, FaPeopleCarry, FaQuestion, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const FixedBottomMenu = () => {
  const active = "bg-red-500";

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 rounded-t-xl max:md:max-w-2xl mx-auto  bg-gray-900 py-4 z-50 max-sm:full">
      <ul className="flex justify-between px-3 items-center">
        <li className="font-mono">
          <NavLink
            to="/books"
            // className="flex flex-col items-center"
            // activeClassName="bg-red"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 flex flex-col items-center"
                : "flex flex-col items-center text-white"
            }
          >
            <FaBook />
            <p className="text-[13px]  font-bold">Books</p>
          </NavLink>
        </li>
        <li className="font-mono ">
          <NavLink to='/Search'
            className={({ isActive }) =>
              isActive
                ? "text-blue-600   flex flex-col items-center"
                : "flex flex-col items-center text-white"
            }
          >
            <FaSearch />
            <p className="text-[12px]  font-bold">Search</p>
          </NavLink>
        </li>
        <li className="font-mono">
          <NavLink
            to="/study"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 flex flex-col items-center"
                : "flex flex-col items-center text-white"
            }
          >
            <FaPeopleCarry />
            <p className="text-[12px]  font-bold">study</p>
          </NavLink>
        </li>
        <li className="font-mono">
          <NavLink
            to="/papers"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 flex flex-col items-center"
                : "flex flex-col items-center text-white"
            }
          >
            <FaPager/>
            <p className="text-[12px]  font-bold">papers</p>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/quiz"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 flex flex-col items-center"
                : "flex flex-col items-center text-white"
            }
          >
            <FaQuestion/>
            <p className="text-[12px] font-bold">Quizzes</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default FixedBottomMenu;
