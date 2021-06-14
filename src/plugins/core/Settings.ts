export default class Settings {
  constructor() {
    console.log("Settings!");
  }

  menuItems(app: any) {
    return [
      {
        id: "idSetting",
        label: "Settings",
        link: "#settings",
        priority: 500,
      },
    ];
  }
}
