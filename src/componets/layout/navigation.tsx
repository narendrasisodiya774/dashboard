"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Gear, Help, Logo } from "~/assets/icons";
import { LAYOUT_CONFIG, LOGIN_INFO } from "~/utils/constants";
import HrDivider from "../common/divider";
import { ILayoutConfig } from "~/interfaces";
import { mapLayoutConfigToIcon } from "~/utils/controlles";

const Navigation = () => {
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

  const getActiveClass = (route: string) => {
    return pathname === route ? "bg-cool-blue" : "";
  };

  return (
    <div className="flex flex-col justify-between py-7">
      <div>
        <div className="mb-11">
          <Link href={"./"}>
            <Image src={Logo} alt={"logo"} priority />
          </Link>
        </div>

        <div className="flex flex-col items-center gap-4">
          {dynamicConfigList.map((config: ILayoutConfig) => {
            const { id, displayText, acronym, route } = config;
            const activeClass = getActiveClass(config.route);

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
