export default class Menu {
  #items = [
    {
      id: "id1",
      label: "Menu 1",
      link: "#1",
      priority: 10,
    },
    {
      id: "id2",
      label: "Menu 2",
      link: "#2",
      priority: 11,
    },
  ];

  menuItems() {
    return this.#items;
  }
}
