import { Posts } from "@/components/molecules/Posts/Posts";
// import { PostsSkeleton } from "@/components/molecules/Posts/Posts.skeleton";
// import { Suspense } from "react";

export default async function Blog() {
  return (
    <main className="col-span-8">
      <h3 className="heading-h3 mb-[4rem]">All Posts</h3>
      {/* @ts-expect-error Async Server Component */}
      <Posts />
    </main>
  );
}

// {/* <Suspense fallback={<PostsSkeleton />}> */}
//   {/* @ts-expect-error Async Server Component */}
//   <Posts />
// {/* </Suspense> */}
