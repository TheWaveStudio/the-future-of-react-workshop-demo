import { Posts } from "@/components/molecules/Posts/Posts";
import { PostsSkeleton } from "@/components/molecules/Posts/Posts.skeleton";
import { Suspense } from "react";

export const metadata = {
  title: "The Wave Studio 🌊 - Blog",
  description: "Scopri il nostro blog",
};

export default async function Blog() {
  return (
    <main className="col-span-8">
      <h3 className="heading-h3 mb-[4rem]">All Posts</h3>
      <Suspense fallback={<PostsSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <Posts simulateDelay />
      </Suspense>
    </main>
  );
}
