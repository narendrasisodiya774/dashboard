export const GetParentChildNodes_ByCategory = (dataList: any[]) => {
  // Dynamic workflow list
  let dynamicHeaderListCategory = dataList.filter(
    (o) => o.type === "MAIN_MENU"
  );

  // Loop by category
  dynamicHeaderListCategory.forEach((elementCategory: any) => {
    let dynamicHeaderListGroupWithPage = dataList.filter(
      (o) => o.type === "GROUP" && o.parentId === elementCategory.id
    );

    dynamicHeaderListGroupWithPage.forEach((elementGroup: any) => {
      let subList = dataList.filter(
        (o) => o.type === "PAGE" && o.parentId === elementGroup.id
        // && o.active
      );

      // sort by display index

      subList = subList.sort(
        (a: any, b: any) => a.displayIndex - b.displayIndex
      );

      elementGroup.nodes = subList;
    });

    // remove parent node with empty children
    dynamicHeaderListGroupWithPage = dynamicHeaderListGroupWithPage.filter(
      (o: any) => o.nodes.length > 0
    );

    // Add pages if any (pages without groups assigned)
    let dynamicHeaderListPage = dataList.filter(
      (o: any) => o.type === "PAGE" && o.parentId === elementCategory.id
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
