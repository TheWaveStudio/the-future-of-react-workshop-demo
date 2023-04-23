import type { PostsResponse } from "@/types/data";
import { Post } from "../Post/Post";

const getPosts = async (userId?: string): Promise<PostsResponse> => {
  // await new Promise((resolve, reject) => setTimeout(resolve, 5000));
  const response = await fetch(
    `https://dummyjson.com/posts${userId ? `/user/${userId}` : ""}`,
    {
      cache: "no-store",
    }
  );
  return response.json();
};

export const Posts = async ({ userId }: { userId?: string }) => {
  const { posts } = (await getPosts(userId)) || {};

  return (
    <div className="grid grid-cols-8 gap-20 relative z-10 mb-[15rem]">
      {posts?.map(({ id, ...rest }) => (
        <Post key={id} id={id} {...rest} />
      ))}
    </div>
  );
};
