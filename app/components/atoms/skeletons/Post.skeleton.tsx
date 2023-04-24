import React from "react";

export const PostSkeleton = () => {
  return (
    <div
      role="status"
      className="col-span-4 h-[20rem] 3xl:col-span-2 rounded-[1rem] p-2 border-2 animate-pulse md:p-6  border-secondary-500 dark:border-secondary-300 flex flex-col"
    >
      <div className="h-[2rem] bg-secondary-500 rounded-full dark:bg-secondary-300 w-[50%] mb-4"></div>
      <div className="h-[2rem] bg-secondary-500 rounded-full dark:bg-secondary-300 w-[70%] mb-[2rem]"></div>
      <div className="h-[0.5rem] w-[70%] bg-secondary-500 rounded-full dark:bg-secondary-300 mb-2.5"></div>
      <div className="h-[0.5rem] bg-secondary-500 rounded-full dark:bg-secondary-300 mb-2.5"></div>
      <div className="h-[0.5rem] w-[60%] bg-secondary-500 rounded-full dark:bg-secondary-300"></div>
      <div className="flex items-center justify-between mt-auto">
        <div className="h-[2rem] bg-secondary-500 rounded-full dark:bg-secondary-300 w-[10rem] mb-2"></div>
        <div className="w-[3rem] h-[2rem] bg-secondary-500 rounded-full dark:bg-secondary-300"></div>
      </div>
      <span className="sr-only">Loading Post...</span>
    </div>
  );
};
