import {
	TIPOS,
	items
} from './items';

let MENU;
let currentMenu;
let backToMenuButton;
let searchBox;

function init() {
	MENU = $("#menu").clone();
	setBackToMenuButton();
	searchBox = $("#cover").clone()[0];
	currentMenu = document.getElementById("menu");
	const cards = document.getElementsByClassName("card");
	for (let i = 0; i < cards.length; i++) {
		cards[i].addEventListener("click", () => {
			clickMenuCard(i);
		});
	}
	document.getElementById("form").addEventListener("submit", search);
}

function getTitle(i) {
	switch (i) {
		case 2:
			return "Tallarines / Arroz";
		case 7:
			return "Cerdo / Pato";
		case 9:
			return "Dian Xin";
		default:
			return Object.keys(TIPOS).find(key => TIPOS[key] === i);
	};
}


function search(e) {
	document.getElementById("form").addEventListener("submit", search);
	e.preventDefault();
	const input = document.getElementById("input").value.toUpperCase();
	currentMenu.innerHTML = "";
	const para = document.createElement("H2");
	const t = document.createTextNode("Resultados: " + input);
	para.appendChild(t);
	currentMenu.appendChild(para);
	currentMenu.appendChild(searchBox);
	document.getElementById("form").addEventListener("submit", search);

	const currentItems = items.filter(item => item.desc.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().trim().includes(input.trim()));
	const listGroup = createListGroup(currentItems);
	currentMenu.appendChild(listGroup);
	currentMenu.appendChild(backToMenuButton);
	window.location.hash = "";
	window.location.hash = "menu";
}

function clickMenuCard(index) {
	currentMenu.innerHTML = "";
	const para = document.createElement("H2");
	const title = getTitle(index);
	let t = "error";
	if (index != 11) {
		t = document.createTextNode("Menú de " + title);
	} else {
		t = document.createTextNode("Menú del día & promociones");
	}
	para.appendChild(t);
	currentMenu.appendChild(para);
	currentMenu.appendChild(searchBox);
	document.getElementById("form").addEventListener("submit", search);

	const currentItems = items.filter(item => item.tipo == index);
	const listGroup = createListGroup(currentItems);
	currentMenu.appendChild(listGroup);
	currentMenu.appendChild(backToMenuButton);
	window.location.hash = "";
	window.location.hash = "menu";
}

function createListGroup(items) {
	const list = document.createElement("DIV");
	list.classList.add("list-group");

	//*********	
	items.forEach(i => {
		const anchor = document.createElement("A");
		anchor.classList.add("list-group-item");

		const container = document.createElement("DIV");
		container.classList.add("d-flex");
		container.classList.add("w-100");
		container.classList.add("justify-content-between");

		const heading = document.createElement("H5");
		heading.classList.add("mb-1");
		let text = document.createTextNode(i.id);
		heading.appendChild(text);

		const small = document.createElement("SMALL");
		text = document.createTextNode(i.price + "€");
		small.appendChild(text);

		container.appendChild(heading);
		container.appendChild(small);

		const desc = document.createElement("P");
		desc.classList.add("mb-1");
		text = document.createTextNode(i.desc);
		desc.appendChild(text);

		anchor.appendChild(container);
		anchor.appendChild(desc);

		list.appendChild(anchor);
	});

	return list;
}

function setMainMenu() {
	currentMenu.innerHTML = MENU[0].innerHTML;
	init();
	window.location.hash = "";
	window.location.hash = "menu";
}

function setBackToMenuButton() {
	const button = document.createElement("BUTTON");
	const text = document.createTextNode("Ir al menú");
	button.appendChild(text);
	button.addEventListener("click", setMainMenu);
	button.classList.add("btn");
	button.classList.add("btn-info");
	backToMenuButton = button;
}

init();