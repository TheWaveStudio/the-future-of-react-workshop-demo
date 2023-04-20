import { TextualLogo } from "@/components/atoms/TextualLogo/TextualLogo";
import { HeaderResponse } from "@/types/data";
import { Navigation } from "../Navigation/Navigation";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";

const getHeader = async (): Promise<HeaderResponse> => {
  const response = await fetch("http://localhost:3000/api/header");
  return await response.json();
};

export const Header = async () => {
  const header = await getHeader();
  const { title, subtitle, navigation } = header;

  return (
    <div className="container">
      <div className="flex items-center gap-5 mt-[3rem]">
        <TextualLogo {...{ title, subtitle }} />
        <Navigation navigation={navigation} />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
