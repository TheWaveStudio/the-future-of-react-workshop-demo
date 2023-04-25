import { Users } from "@/components/molecules/Users/Users";
// import { UsersSkeleton } from "@/components/molecules/Users/Users.skeleton";
// import { Suspense } from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-[10rem]">
      <div className="container">
        <div className="default-grid">
          {/* @ts-expect-error Async Server Component */}
          <Users />
          {children}
        </div>
      </div>
    </div>
  );
}

// <Suspense fallback={<UsersSkeleton />}>
// {/* @ts-expect-error Async Server Component */}
// <Users />
// </Suspense>
