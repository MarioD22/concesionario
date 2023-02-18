function Menu() {
	var menu = document.getElementById("btn-menu");
	var list = document.getElementById("btn-list");
	if (menu.classList.contains('btn-menu-abierto')) {
		menu.classList.remove("btn-menu-abierto");
		list.classList.remove("btn-list-abierto");
	} else {
		menu.classList.add("btn-menu-abierto");
		list.classList.add("btn-list-abierto");
	}
}
