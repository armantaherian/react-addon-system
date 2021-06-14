export default class Core {
  modules = new Map();

  getAllModules() {
    return this.modules;
  }

  addModule(newModule: { id: any; module: any; }) {
    this.modules.set(newModule.id, newModule.module);
    return this.getAllModules();
  }

  //
  getMenuItems() {
    let items: any[] = [];
    console.log("getMenuItems");

    this.getAllModules().forEach((module: any, key: any, map: any) => {
      console.log(module, key, map);

      if (typeof module.menuItems === "function") {
        const thisItems = module.menuItems(items, this);
        items = [...items, ...thisItems];
      }
    });

    items = items.sort((a, b) => a.priority - b.priority);

    return items;
  }

  //
  getFooter() {
    let content: any = ['Footer'];
    console.log("getFooter");

    this.getAllModules().forEach((module: any, key: any, map: any) => {
      console.log(module, key, map);

      if (typeof module.footer === "function") {
        content = module.footer(content, this);
      }
    });

    return content;
  }
}
