import Link from "next/link";
import type { TextualLogoProps } from "./TextualLogo.props";

export const TextualLogo = ({ title, subtitle }: TextualLogoProps) => {
  return (
    <Link href="/" className="flex flex-col">
      <span className="text-xl font-bold">{title}</span>
      <span className="font-light -mt-[0.5rem]">{subtitle}</span>
    </Link>
  );
};
