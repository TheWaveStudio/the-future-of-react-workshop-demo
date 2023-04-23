import Image from "next/image";
import Link from "next/link";
import type { User as UserType } from "@/types/data";

export const User = ({
  id,
  image,
  firstName,
  lastName,
  username,
}: UserType) => {
  return (
    <Link
      href={`/blog/${id}`}
      className="ld-main-gradient flex p-[0.25rem] rounded-[1rem] hover:translate-x-[1rem] transition-all duration-300 ease-in-out max-w-[40rem]"
    >
      <div className="flex w-full ld-background-color p-[0.8rem] rounded-[0.8rem] gap-[1.25rem] items-center">
        <div className="w-[3.5rem] h-[3.5rem] relative overflow-hidden rounded-full dark:bg-primary-50 bg-secondary-300">
          <Image
            src={image}
            alt={`${firstName}${lastName}`}
            style={{ objectFit: "contain" }}
            sizes="25vw"
            fill
          />
        </div>
        <div className="flex flex-col ld-text-color">
          <h4 className="heading-h4 font-bold -mb-[0.25rem]">
            {firstName} {lastName}
          </h4>
          <span className="dark:text-primary-300 text-primary-800">
            @{username}
          </span>
        </div>
      </div>
    </Link>
  );
};
