import { Users } from "@/components/molecules/Users/Users";

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
