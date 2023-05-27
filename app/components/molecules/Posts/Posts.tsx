import type { PostsResponse } from "@/types/data";
import { Post } from "../Post/Post";

const getPosts = async (
  userId?: string,
  simulateDelay?: boolean
): Promise<PostsResponse> => {
  simulateDelay &&
    (await new Promise((resolve, reject) => setTimeout(resolve, 1500)));
  const response = await fetch(
    `https://dummyjson.com/${userId === "3" ? "postss" : "posts"}${
      userId ? `/user/${userId}` : ""
    }`
  );
  return response.json();
};

export const Posts = async ({
  userId,
  simulateDelay,
}: {
  userId?: string;
  simulateDelay?: boolean;
}) => {
  const { posts } = await getPosts(userId, simulateDelay);

  return (
    <div className="grid grid-cols-8 gap-20 relative z-10 mb-[15rem]">
      {posts?.map(({ id, ...rest }) => (
        <Post key={id} id={id} {...rest} />
      ))}
    </div>
  );
};
