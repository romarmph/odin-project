import { H, P, Span } from "../components/content";
import { Divider } from "../components/divider";
import { Div } from "../components/layout";


const appetizers = [
	{ name: "Phantom Tentacle Tempura", price: 500 },
	{ name: "Mystic Mushroom Medley", price: 480 },
	{ name: "Galactic Gyoza", price: 520 },
	{ name: "Ethereal Escargot Bites", price: 510 },
	{ name: "Cosmic Caviar Cones", price: 530 },
	{ name: "Spectral Sushi Sliders", price: 490 },
	{ name: "Nebula Nacho Nuggets", price: 470 },
	{ name: "Astral Avocado Bombs", price: 460 },
	{ name: "Celestial Cheese Curds", price: 500 },
	{ name: "Quantum Quiche Quarters", price: 520 }
]
	;

const mainCourse = [
	{ name: "Dragonfire Ramen", price: 2500 },
	{ name: "Starlight Steak Surprise", price: 3000 },
	{ name: "Galactic Grilled Octopus", price: 2800 },
	{ name: "Mystic Mushroom Risotto", price: 2200 },
	{ name: "Nebula Noodle Nest", price: 2400 },
	{ name: "Cosmic Curry Cauldron", price: 2600 },
	{ name: "Ethereal Eggplant Extravaganza", price: 2100 },
	{ name: "Phantom Pho Fusion", price: 2300 },
	{ name: "Quantum Quinoa Quiche", price: 2000 },
	{ name: "Celestial Chicken Casserole", price: 2700 },
	{ name: "Astral Ahi Tuna", price: 2900 },
	{ name: "Spectral Spaghetti Squash", price: 2200 }
];

const desserts = [
	{ name: "Galactic Gelato", price: 1500 },
	{ name: "Nebula Nougat", price: 1800 },
	{ name: "Cosmic Crème Brûlée", price: 2000 },
	{ name: "Ethereal Eclair", price: 1700 },
	{ name: "Phantom Parfait", price: 1600 },
	{ name: "Mystic Mousse", price: 1400 },
	{ name: "Astral Apple Pie", price: 1900 }
];

const drinks = [
	{ name: "Aztec Ambrosia", price: 1000 },
	{ name: "Quetzalcoatl Quencher", price: 1050 },
	{ name: "Tenochtitlan Tonic", price: 1100 },
	{ name: "Mystic Maize Mojito", price: 950 },
	{ name: "Jaguar Juice", price: 980 },
	{ name: "Eagle Warrior Elixir", price: 1020 },
	{ name: "Phantom Pulque", price: 990 },
	{ name: "Tezcatlipoca Tea", price: 1010 },
	{ name: "Huitzilopochtli Hydration", price: 970 },
	{ name: "Celestial Cacao", price: 1030 },
	{ name: "Astral Atole", price: 1080 },
	{ name: "Spectral Sangria", price: 1000 },
	{ name: "Dragonfruit Delight", price: 950 },
	{ name: "Starlight Spritzer", price: 980 },
	{ name: "Aurora Ambrosia", price: 1020 }
];

function renderItemList(list) {
	return list.map(item => {
		return P({
			attributes: {
				class: "menu__list__item",
			},
			children: [
				Span({
					attributes: {
						class: "menu__list__item__name"
					},
					child: item.name,
				}),
				Span({
					attributes: {
						class: "menu__list__item__price"
					},
					child: item.price.toString(),
				}),
			],
		});
	});
}

const menu = [
	H({
		level: 1,
		attributes: {
			class: "menu__title",
		},
		child: "MENU",
	}),

	Div({
		attributes: {
			class: "menu  container",
		},
		children: [
			H({
				level: 2,
				attributes: {
					class: "menu__sub__title",
				},
				child: "APPETIZERS",
			}),
			Divider(),
			Div({
				attributes: {
					class: "menu__list",
				},
				children: renderItemList(appetizers),
			}),
			H({
				level: 2,
				attributes: {
					class: "menu__sub__title",
				},
				child: "MAIN COURSE",
			}),
			Divider(),
			Div({
				attributes: {
					class: "menu__list",
				},
				children: renderItemList(mainCourse),
			}),
			H({
				level: 2,
				attributes: {
					class: "menu__sub__title",
				},
				child: "DESSERTS",
			}),
			Divider(),
			Div({
				attributes: {
					class: "menu__list",
				},
				children: renderItemList(desserts),
			}),
			H({
				level: 2,
				attributes: {
					class: "menu__sub__title",
				},
				child: "BEVERAGES",
			}),
			Divider(),
			Div({
				attributes: {
					class: "menu__list",
				},
				children: renderItemList(drinks),
			}),
		],
	})
];

export default menu;
