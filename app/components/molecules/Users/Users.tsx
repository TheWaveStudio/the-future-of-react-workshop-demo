import type { UsersResponse } from "@/types/data";
import { User } from "../User/User";
import Link from "next/link";

const getUsers = async (): Promise<UsersResponse> => {
  const response = await fetch(
    "https://dummyjson.com/users?limit=3&select=firstName,lastName,image,id,username"
  );
  return await response.json();
};

export const Users = async () => {
  const { users } = await getUsers();

  return (
    <aside className="col-span-4 sticky top-[5rem] h-[25rem]">
      <h3 className="heading-h3 mb-[4rem]">Filter by user</h3>
      <div className="flex flex-col gap-[1rem]">
        {users?.map(({ id, ...rest }) => (
          <User key={id} id={id} {...rest} />
        ))}
        <Link
          className="mt-[2.5rem] ld-text-color font-bold underline underline-offset-4"
          href="/blog"
        >
          View all posts
        </Link>
      </div>
    </aside>
  );
};
