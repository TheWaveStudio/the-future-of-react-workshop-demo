import { PostSkeleton } from "@/components/atoms/skeletons/Post.skeleton";

export const PostsSkeleton = () => {
  return (
    <div className="grid grid-cols-8 gap-20 relative z-10 mb-[15rem]">
      {Array.from(Array(3).keys()).map((key) => (
        <PostSkeleton key={key} />
      ))}
    </div>
  );
};
