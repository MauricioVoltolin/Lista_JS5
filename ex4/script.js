class MenuItem {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(childMenuItem) {
        this.children.push(childMenuItem);
    }
}

function displayMenu(menuItem, depth = 0) {
    const navigationMenuDiv = document.getElementById('navigationMenu');
    const menuItemElement = document.createElement('div');
    menuItemElement.textContent = `${'  '.repeat(depth)}- ${menuItem.name}`;
    navigationMenuDiv.appendChild(menuItemElement);

    for (const child of menuItem.children) {
        displayMenu(child, depth + 1);
    }
}

const rootMenuItem = new MenuItem('Home');

const aboutUs = new MenuItem('About Us');
const services = new MenuItem('Services');
const contact = new MenuItem('Contact');

const team = new MenuItem('Our Team');
const portfolio = new MenuItem('Portfolio');
const faq = new MenuItem('FAQ');

rootMenuItem.addChild(aboutUs);
rootMenuItem.addChild(services);
rootMenuItem.addChild(contact);

aboutUs.addChild(team);
services.addChild(portfolio);
contact.addChild(faq);

// Adicionando a chamada para exibir o menu hierárquico ao carregar a página
window.onload = function() {
    displayMenu(rootMenuItem);
};
