"use client";
import React, { useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { LAYOUT_CONFIG, LOGIN_INFO } from "~/utils/constants";
import { GetParentChildNodes_ByCategory } from "~/utils/controlles";
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
import Link from "next/link";
import clsx from "clsx";
import HrDivider from "../common/divider";

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

interface ILayoutConfig {
  parentId: string;
  displayText: string;
  displayIndex: number;
  acronym: string;
  id: string;
  type: string;
  jsonConfig?: string;
  tenantId: string;
  app: string;
  route: string;
  active: boolean;
}

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

      let dynamicHeaderList = GetParentChildNodes_ByCategory(clone);

      dynamicHeaderList = dynamicHeaderList.sort(
        (a: ILayoutConfig, b: ILayoutConfig) => a.displayIndex - b.displayIndex
      );
      return clone;
    }
    return [];
  }, []);

  // const nameParts = LOGIN_INFO.name.split(" ");
  // const userInitials = nameParts
  //   ?.filter((namePart: any) => namePart?.length)
  //   .map((namePart: any) => namePart[0].toUpperCase())
  //   .join("");

  const navigateToPage = (node: ILayoutConfig) => {
    if (node.route) {
      console.log("Route: ", node.route);
      router.push(node.route.toLowerCase());
    }
  };

  const useActiveClass = (route: string) => {
    return pathname === route ? "bg-[#4F45E4]" : "";
  };

  return (
    <div className="flex flex-col justify-between py-7">
      <div onClick={() => router.push("./")}>
        <div className="mb-11">
          <Image src={Logo} alt={"logo"} priority />
        </div>

        <div className="flex flex-col items-center gap-4">
          {dynamicConfigList.map((config: ILayoutConfig) => {
            const { id, displayText, acronym, route } = config;
            const activeClass = useActiveClass(config.route);

            const iconElement = (
              <div key={id} title={displayText}>
                <div
                  // onClick={() => navigateToPage(config)}
                  className={clsx(
                    "w-[38px] h-[38px] flex justify-center items-center rounded-lg",
                    activeClass
                  )}
                >
                  {/* <Link
                    href={`${route}`}
                    as={route}
                    className="pointer-events-auto"
                  > */}
                  <Image
                    src={mapLayoutConfigToIcon(
                      acronym,
                      pathname === config.route
                    )}
                    alt={config.acronym}
                    priority
                  />
                  {/* </Link> */}
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
      {/* <Link
        href={`${dynamicConfigList[0].route}`}
        as={dynamicConfigList[0].route}
      >
        <Image
          src={mapLayoutConfigToIcon(
            dynamicConfigList[0].acronym,
            pathname === dynamicConfigList[0].route
          )}
          alt={dynamicConfigList[0].acronym}
          priority
        />
      </Link> */}
      <div className="flex flex-col items-center">
        <div className="w-[20px] h-[20px] flex justify-center items-center">
          <Image src={Help} alt="help" priority />
        </div>
        <HrDivider />
        <div className="w-[38px] h-[38px] rounded-lg bg-[#f4f4f4] flex items-center justify-center">
          <Image src={Gear} alt="setting" priority />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
