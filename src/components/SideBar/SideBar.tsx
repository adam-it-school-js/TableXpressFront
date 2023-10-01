import React, { FC } from "react";
import Logo from "../../assets/images/logo.svg";
import Dashboard from "../../assets/icons/home-select.svg";
import Charts from "../../assets/icons/chart.svg";
import History from "../../assets/icons/documents.svg";
import Users from "../../assets/icons/user.svg";
import Settings from "../../assets/icons/settings.svg";
import LogOut from "../../assets/icons/logout.svg";

interface SidebarLinkProps {
  icon: string;
  text: string;
}

const SidebarLink: FC<SidebarLinkProps> = ({ icon, text }) => (
  <a
    className="text-[#0C4284] font-normal text-[18px] mt-[16px] flex hover:bg-[#DAE9FC] py-[8px] pl-[12px] rounded-3xl cursor-pointer active:bg-[#DAE9FC]"
    href="#"
  >
    <img className="mr-[16px]" src={icon} alt="" />
    <span>{text}</span>
  </a>
);

const sidebarLinks: SidebarLinkProps[] = [
  { icon: Dashboard, text: "Dashboard" },
  { icon: Charts, text: "Charts" },
  { icon: History, text: "History" },
  { icon: Users, text: "Users" },
  { icon: Settings, text: "Settings" },
  { icon: LogOut, text: "Log Out" },
];

export const SideBar: FC = () => {
  return (
    <div className="w-[246px] bg-[#FFF] pt-[20px] pl-[40px] pr-[35px] pb-[937px] flex flex-col justify-between">
      <img src={Logo} className="w-[197px] h-[95px]" alt="logo" />
      <h1 className="ml-[16px] mr-[24px] mt-[-2px] w-[206px] h-[33px] text-[#0A376EDE] font-bold font-alegreya">
        Branch Su Van Hanh
      </h1>
      <div className="mt-[40px] flex flex-col">
        {sidebarLinks.map((link, index) => (
          <SidebarLink key={index} icon={link.icon} text={link.text} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
