export default class JsonExport {
  #menu = [
    {
      id: "idJsonExport",
      label: "Json Export",
      link: "#json",
      priority: 100,
    },
  ];

  menuItems(menuItems: any[], app: any) {
    console.log("JsonExport:menuItems", app, menuItems);
    return this.#menu;
  }

  footer(currentFooter: string, app: any) {
    return [currentFooter, " <a href='#'><strong>JsonExport</strong></a>"];
  }
}
