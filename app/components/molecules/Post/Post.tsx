import type { Post as PostType } from "@/types/data";
import Link from "next/link";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Post = ({ id, title, body, reactions }: PostType) => {
  return (
    <Link
      href={`/blog/${id}`}
      className="col-span-4 3xl:col-span-2 ld-main-gradient flex p-[0.25rem] rounded-[1rem] hover:scale-[1.03] transition-all duration-300 ease-in-out"
    >
      <div className="flex flex-col w-full ld-background-color p-[2rem] rounded-[0.8rem] gap-[1.25rem]">
        <div className="pr-[5rem] pb-[2.5rem]">
          <h2 className="heading-h2">{title}</h2>
          <p className="dark:text-primary-100 text-secondary-900 opacity-80 mt-[0.5rem] line-clamp-3">
            {body}
          </p>
        </div>
        <div className="flex justify-between mt-auto">
          <span className="ld-text-color font-bold underline underline-offset-4">
            READ MORE
          </span>
          <div className="dark:text-primary-300 text-primary-800 flex gap-[0.5rem] items-start">
            <FontAwesomeIcon icon={faThumbsUp} size="lg" />
            <span className="font-bold">{reactions}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
