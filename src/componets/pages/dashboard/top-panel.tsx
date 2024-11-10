// This component can be placed in the layout component if it is common to all pages
import Image from "next/image";
import {
  Bell,
  Calendar,
  ProfilePlaceholder,
  Search,
  Setting,
  Sidebar,
} from "~/assets/icons";

export default function DashboardTopPanel() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-evenly h-[116px] md:h-[78px] bg-cool-blue text-white md:justify-between md:items-center">
      <div className="flex gap-3 px-3 md:pl-6 justify-between md:justify-start items-center">
        <div>
          <Image src={Sidebar} alt="sidebar" priority />
        </div>
        <div className="relative">
          <Image
            src={Search}
            alt="search"
            priority
            className="absolute left-2 top-[7px]"
          />
          <input
            placeholder="Search"
            className="w-[365px] bg-cool-blue-1 h-[35px] pl-8 pr-3 rounded-[9px] focus: outline-none focus-visible:outline-none"
          />
        </div>
      </div>
      <div className="flex justify-end w-full md:w-auto items-center gap-3 pr-3 md:pr-6">
        <div>
          <Image src={Calendar} alt="calendar" priority />
        </div>
        <div>
          <Image src={Bell} alt="bell" priority />
        </div>
        <div>
          <Image src={Setting} alt="sidebar" priority />
        </div>
        <div className="flex gap-2 items-center min-w-[143px] bg-cool-blue-1 p-2 rounded-lg">
          <div>
            <p className="text-[11px] font-light">test@customer.com</p>
            <h5 className="text-[11px] font-bold">Hexa PVT. LTD.</h5>
          </div>
          <div>
            <Image src={ProfilePlaceholder} alt="title" priority />
          </div>
        </div>
      </div>
    </div>
  );
}
