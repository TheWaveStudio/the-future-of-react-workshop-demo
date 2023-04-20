import React from "react";
import { TextualLogoProps } from "./TextualLogo.props";
import Link from "next/link";

export const TextualLogo = ({ title, subtitle }: TextualLogoProps) => {
  return (
    <Link href="/" className="flex flex-col">
      <span className="text-large font-bold">{title}</span>
      <span className="font-light -mt-[0.5rem]">{subtitle}</span>
    </Link>
  );
};
