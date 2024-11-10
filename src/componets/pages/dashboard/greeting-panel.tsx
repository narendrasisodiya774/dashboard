import Image from "next/image";
import { TenantLogo } from "~/assets/icons";

export default function GreetingPanal() {
  return (
    <div className="flex h-[116px] flex-col md:flex-row md:h-[78px] justify-between items-center px-6 pt-6 mb-4">
      <div className="flex w-full gap-6">
        <div className="flex min-w-[143px] items-center rounded-lg gap-5">
          <div className="w-12 flex justify-center items-center bg-white rounded aspect-square">
            <Image src={TenantLogo} alt="logo" priority />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Hello, Rahul</h1>
            <p className="text-[14px] font-normal opacity-50">Hexa PVT. LTD.</p>
          </div>
        </div>
        <div>
          <span className="h-[30px] text-white bg-cool-blue-1 rounded-md px-3 py-1.5">
            Customer
          </span>
        </div>
      </div>
      <div className="w-full text-end">
        <select
          id="date-range"
          className="p-2 border border-cool-light-2 min-w-[117px] max-w-[148px] rounded-md focus-visible:outline-none opacity-50"
        >
          <option value="last7">Last 7 Days</option>
          <option value="last30">Last 30 Days</option>
          <option value="last90">Last 90 Days</option>
          <option value="last365">Last 365 Days</option>
        </select>
      </div>
    </div>
  );
}
