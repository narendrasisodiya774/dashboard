import { ILayoutConfig } from "~/interfaces";

export const GetParentChildNodes_ByCategory = (dataList: ILayoutConfig[]) => {
  // Dynamic workflow list
  let dynamicHeaderListCategory = dataList.filter(
    (o) => o.type === "MAIN_MENU"
  );

  // Loop by category
  dynamicHeaderListCategory.forEach((elementCategory: ILayoutConfig) => {
    let dynamicHeaderListGroupWithPage = dataList.filter(
      (o) => o.type === "GROUP" && o.parentId === elementCategory.id
    );

    dynamicHeaderListGroupWithPage.forEach((elementGroup: ILayoutConfig) => {
      let subList = dataList.filter(
        (o) => o.type === "PAGE" && o.parentId === elementGroup.id
        // && o.active
      );

      // sort by display index

      subList = subList.sort(
        (a: ILayoutConfig, b: ILayoutConfig) => a.displayIndex - b.displayIndex
      );

      elementGroup.nodes = subList;
    });

    // remove parent node with empty children
    dynamicHeaderListGroupWithPage = dynamicHeaderListGroupWithPage.filter(
      (o: ILayoutConfig) => o.nodes.length > 0
    );

    // Add pages if any (pages without groups assigned)
    let dynamicHeaderListPage = dataList.filter(
      (o: ILayoutConfig) =>
        o.type === "PAGE" && o.parentId === elementCategory.id
    );

    dynamicHeaderListGroupWithPage = [
      ...dynamicHeaderListGroupWithPage,
      ...dynamicHeaderListPage,
    ];

    elementCategory.nodes = dynamicHeaderListGroupWithPage;
  });

  return dynamicHeaderListCategory;
};

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    // style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(value);
}

export function formatCurrencyWithStyle(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(value);
}
