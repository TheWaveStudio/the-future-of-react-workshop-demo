import React from "react";

export const UserSkeleton = () => {
  return (
    <div
      role="status"
      className="col-span-4 h-[5rem] 3xl:col-span-2 rounded-[1rem] p-1 border-2 animate-pulse border-secondary-500 dark:border-secondary-300 flex flex-col"
    >
      <div className="flex items-center mt-4 space-x-3">
        <svg
          className="text-secondary-500 w-40 h-40 dark:text-secondary-300"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div className="w-full">
          <div className="h-[1rem] w-[50%] mb-2 bg-secondary-500 rounded-full dark:bg-secondary-300"></div>
          <div className="h-[0.5rem] w-[20%] bg-secondary-500 rounded-full dark:bg-secondary-300"></div>
        </div>
      </div>
      <span className="sr-only">Loading User...</span>
    </div>
  );
};
