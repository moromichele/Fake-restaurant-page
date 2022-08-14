import "./style.css";
import menu from "./menu.js";
import homepage from "./homepage.js";
import contact from "./contact.js";
import header from "./header.js";
import footer from "./footer.js";
import { changeTab, buttons, tabContainer } from "./tabsLogic.js";

const c = document.querySelector("#content");

const initPage = () => {
	c.appendChild(header());
	c.appendChild(buttons());
	c.appendChild(tabContainer());
	c.appendChild(footer());
	changeTab(1); //go to homepage
}

initPage()
