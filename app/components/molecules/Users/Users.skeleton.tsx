import { UserSkeleton } from "@/components/atoms/skeletons/User.skeleton";

export const UsersSkeleton = () => {
  return (
    <aside className="col-span-4 sticky top-[5rem] h-[25rem]">
      <h3 className="heading-h3 mb-[4rem]">Filter by user</h3>
      <div className="flex flex-col gap-[1rem]">
        {Array.from(Array(3).keys()).map((key) => (
          <UserSkeleton key={key} />
        ))}
      </div>
    </aside>
  );
};
