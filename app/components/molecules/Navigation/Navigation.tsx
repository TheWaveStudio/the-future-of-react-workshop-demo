import Link from "next/link";
import type { NavigationProps } from "./Navigation.props";
import React from "react";

export const Navigation = ({ navigation }: NavigationProps) => {
  return (
    <nav className="flex gap-[1rem] ml-auto">
      {navigation?.map((navItem) => (
        <React.Fragment key={navItem.label}>
          <Link className="link-primary group" href={navItem.href}>
            <span className="link-span">{navItem.label}</span>
          </Link>
          <span className="font-bold last:hidden">/</span>
        </React.Fragment>
      ))}
    </nav>
  );
};
