"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavigationProps } from "./Navigation.props";

export const Navigation = ({ navigation }: NavigationProps) => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-[1rem] ml-auto">
      {navigation?.map((navItem) => (
        <React.Fragment key={navItem.label}>
          <Link
            className={`group ${
              pathname === navItem.href
                ? "link-primary-hover"
                : "link-primary hover:link-primary-hover"
            }`}
            href={navItem.href}
          >
            <span className="link-span">{navItem.label}</span>
          </Link>
          <span className="font-bold last:hidden">/</span>
        </React.Fragment>
      ))}
    </nav>
  );
};
