const menuCard = (name, description) => {
  console.log(name + description);
  const container = document.createElement("div");
  container.classList.add("card-container");
  const card = document.createElement("div");
  card.classList.add("menu-card");
  const corner = document.createElement("div");
  corner.classList.add("menu-corner");
  const title = document.createElement("H1");
  title.classList.add("big-h1");
  title.textContent = name + ".vrr";
  const desc = document.createElement("p");
  desc.textContent = description;

  card.appendChild(title);
  card.appendChild(desc);
  container.appendChild(card);
  container.appendChild(corner);
  return container;
};

const menu = () => {
  const title = "Menu";

  const menuTab = document.createElement("div");
  menuTab.classList.add("tab");
  menuTab.classList.add("menu-tab");

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "「　Our file selection　」"
  menuTitle.classList.add("menu-title")
  menuTab.appendChild(menuTitle);


  menuTab.appendChild(
    menuCard("electric_sheep", "What dreams are supposedly made of")
  );
  menuTab.appendChild(menuCard("tonkatsu", "A future classic"));
  menuTab.appendChild(
    menuCard(
      "pineapple_ramen",
      "For the android with no self respect installed"
    )
  );
  menuTab.appendChild(
    menuCard("the_ninja", "Smell value disabled, surprise your sensors")
  );
  return { title: title, tab: menuTab };
};

export default menu;
