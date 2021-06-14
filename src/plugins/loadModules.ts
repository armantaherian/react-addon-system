import Core from "./Core";
import Menu from "./core/Menu";
import Settings from "./core/Settings";

export const AppCore = new Core();
const AppMenu = new Menu();
const AppSettings = new Settings();

AppCore.addModule({
  id: "menu",
  module: AppMenu,
});

AppCore.addModule({
  id: "settings",
  module: AppSettings,
});

export default function loadModules(modulesList: { [key: string]: any; }) {
  for (const module in modulesList) {
    if (Object.prototype.hasOwnProperty.call(modulesList, module)) {
      const element = modulesList[module];
      const currentModule = require(`./user/${element}`);
      const UserCurrentModule = new currentModule.default();

      AppCore.addModule({
        id: module,
        module: UserCurrentModule,
      });
    }
  }
}
