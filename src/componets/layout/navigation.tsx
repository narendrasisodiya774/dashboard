"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useRouter, usePathname } from "next/navigation";
import {
  ContactsBook,
  ContactsBookActive,
  Dashboard,
  DashboardActive,
  DocumentLine,
  DocumentLineActive,
  Finance,
  FinanceActive,
  Gear,
  Help,
  IntegrationInstructions,
  IntegrationInstructionsActive,
  Logo,
  Order,
  OrderActive,
  SettingOne,
  SettingOneActive,
  TableReport,
  TableReportActive,
  WeixinMarket,
  WeixinMarketActive,
} from "~/assets/icons";
import { LAYOUT_CONFIG, LOGIN_INFO } from "~/utils/constants";
import HrDivider from "../common/divider";
import { ILayoutConfig } from "~/interfaces";

const mapLayoutConfigToIcon = (acronym: string, isActive: boolean) => {
  switch (acronym) {
    case "DB":
      return isActive ? DashboardActive : Dashboard;
    case "CB":
      return isActive ? ContactsBookActive : ContactsBook;
    case "OR":
      return isActive ? OrderActive : Order;
    case "SO":
      return isActive ? SettingOneActive : SettingOne;
    case "DL":
      return isActive ? DocumentLineActive : DocumentLine;
    case "FN":
      return isActive ? FinanceActive : Finance;
    case "TR":
      return isActive ? TableReportActive : TableReport;
    case "WM":
      return isActive ? WeixinMarketActive : WeixinMarket;
    case "II":
      return isActive ? IntegrationInstructionsActive : IntegrationInstructions;
    default:
      return Dashboard;
  }
};

const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const dynamicConfigList: ILayoutConfig[] = useMemo(() => {
    if (LAYOUT_CONFIG?.length > 0) {
      let clone = JSON.parse(JSON.stringify(LAYOUT_CONFIG));
      console.log({ clone });
      // Filter by tenantId
      clone = clone.filter(
        (t: ILayoutConfig) => t.tenantId === LOGIN_INFO.tenantId
      );

      clone = clone.filter((t: ILayoutConfig) => t.active);

      // let dynamicHeaderList = GetParentChildNodes_ByCategory(clone);

      clone = clone.sort(
        (a: ILayoutConfig, b: ILayoutConfig) => a.displayIndex - b.displayIndex
      );
      return clone;
    }
    return [];
  }, []);

  const useActiveClass = (route: string) => {
    return pathname === route ? "bg-[#4F45E4]" : "";
  };

  return (
    <div className="flex flex-col justify-between py-7">
      <div>
        <div className="mb-11 cursor-pointer">
          <Image
            onClick={() => router.push("./")}
            src={Logo}
            alt={"logo"}
            priority
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          {dynamicConfigList.map((config: ILayoutConfig) => {
            const { id, displayText, acronym, route } = config;
            const activeClass = useActiveClass(config.route);

            const iconElement = (
              <div title={displayText}>
                <div
                  className={clsx(
                    "w-[38px] h-[38px] flex justify-center items-center rounded-lg",
                    activeClass
                  )}
                >
                  <Image
                    src={mapLayoutConfigToIcon(
                      acronym,
                      pathname === config.route
                    )}
                    alt={config.acronym}
                    priority
                  />
                </div>
              </div>
            );

            return (
              <Link key={id} href={`${route}`}>
                {iconElement}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[20px] h-[20px] flex justify-center items-center cursor-pointer">
          <Image src={Help} alt="help" priority />
        </div>
        <HrDivider />
        <div className="w-[38px] h-[38px] rounded-lg bg-[#f4f4f4] flex items-center justify-center cursor-pointer">
          <Image src={Gear} alt="setting" priority />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
