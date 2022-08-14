import menu from "./menu.js";
import homepage from "./homepage.js";
import contact from "./contact.js";

const tabs = [menu().tab, homepage().tab, contact().tab];

const changeTab = (i) => {
  for (var j = 0; j < tabs.length; j++) {
    const butt = document.getElementById(`butt${j}`);
    if (j === i) {
      butt.classList.add("active-butt");
    } else butt.classList.remove("active-butt");
  }

  const tabContainer = document.querySelector(".tab-container");
  tabContainer.innerHTML = "";
  tabContainer.appendChild(tabs[i]);
};

const buttons = () => {
  const buttContainer = document.createElement("nav");
  buttContainer.classList.add("butt-container");
  const tab1butt = document.createElement("button");
  const tab2butt = document.createElement("button");
  const tab3butt = document.createElement("button");
  tab1butt.id = "butt0";
  tab2butt.id = "butt1";
  tab3butt.id = "butt2";
  tab1butt.innerHTML = menu().title;
  tab2butt.innerHTML = homepage().title;
  tab3butt.innerHTML = contact().title;
  buttContainer.appendChild(tab1butt);
  buttContainer.appendChild(tab2butt);
  buttContainer.appendChild(tab3butt);

  tab1butt.onclick = () => changeTab(0);
  tab2butt.onclick = () => changeTab(1);
  tab3butt.onclick = () => changeTab(2);

  return buttContainer;
};

const tabContainer = () => {
  const tabC = document.createElement("div");
  tabC.classList.add("tab-container");
  tabC.appendChild(homepage().tab);

  return tabC;
};



export {
	buttons,
	tabContainer,
	changeTab
}
