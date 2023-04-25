import type { FooterResponse } from "@/types/data";
import { FooterWrapper } from "./FooterWrapper";

const CURRENT_YEAR = new Date().getFullYear();

const getFooter = async (): Promise<FooterResponse> => {
  const response = await fetch("http://localhost:3000/api/footer");
  return await response.json();
};

export const Footer = async () => {
  const footer = await getFooter();
  const { city, company, email, address } = footer;

  return (
    <FooterWrapper>
      <div className="container">
        <hr className="my-12 h-0.5 border-t-0 dark:bg-secondary-100 bg-secondary-950 opacity-50 dark:opacity-80" />
        <div className="flex items-center gap-5 mt-[3rem] justify-between text-xs dark:text-secondary-100 text-secondary-950 opacity-50 dark:opacity-80">
          <span>
            Copyright {CURRENT_YEAR} - {company}
          </span>
          <span>
            {city} - {address}
          </span>
          <span>{email}</span>
        </div>
      </div>
    </FooterWrapper>
  );
};
