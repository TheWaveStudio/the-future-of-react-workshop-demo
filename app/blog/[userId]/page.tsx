import { Posts } from "@/components/molecules/Posts/Posts";
import { PostsSkeleton } from "@/components/molecules/Posts/Posts.skeleton";
import type { User } from "@/types/data";
import { Suspense } from "react";

const getUser = async (userId: string): Promise<User> => {
  const response = await fetch(
    `https://dummyjson.com/users/${userId}?select=firstName,lastName,image,id,username`
  );
  return await response.json();
};

export default async function UserPosts({
  params,
}: {
  params: { userId: string };
}) {
  const { userId } = params;
  const user = await getUser(userId);

  return (
    <main className="col-span-8">
      <h3 className="heading-h3 mb-[4rem]">
        Posts by {user.firstName} {user.lastName}
      </h3>
      {/* @ts-expect-error Async Server Component */}
      <Posts userId={userId} simulateDelay />
    </main>
  );
}

// <Suspense fallback={<PostsSkeleton />}>
// {/* @ts-expect-error Async Server Component */}
// <Posts userId={userId}  simulateDelay />
// </Suspense>
