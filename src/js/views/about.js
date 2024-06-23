import { H, P } from "../components/content";
import { Div } from "../components/layout";

const about = [
	H({
		level: 1,
		attributes: {
			class: "page__title",
		},
		child: "About",
	}),
	P({
		attributes: {
			class: "container about__content"
		},
		child: "Welcome to Star Platinum, where culinary artistry meets the extraordinary. Our journey began with a passion for pushing boundaries, blending flavors, and creating dining experiences that defy convention. Inspired by the iconic Stand from Jojo’s Bizarre Adventure, we’ve crafted a menu that transcends the ordinary and transports you to a realm of gastronomic wonder."
	}),
	H({
		level: 2,
		attributes: {
			class: "page__sub__title"
		},
		child: "Our Vision",
	}),
	P({
		attributes: {
			class: "container about__content"
		},
		child: "At Star Platinum, we believe that food should be an adventure—an exploration of taste, texture, and imagination. Our chefs, like true Stand users, channel their unique abilities to conjure dishes that surprise, delight, and challenge your senses. From the ethereal to the eccentric, each plate tells a story—a tale of flavor fusion and culinary alchemy."
	}),
	H({
		level: 2,
		attributes: {
			class: "page__sub__title"
		},
		child: "The Cosmic Menu",
	}),
	P({
		attributes: {
			class: "container about__content"
		},
		child: "Our menu orbits the cosmos, drawing inspiration from Aztec legends, interstellar phenomena, and whimsical dreams. Whether you’re savoring Dragonfire Ramen or indulging in Nebula Nectar, every bite is a cosmic collision of ingredients. And fear not, fellow adventurers, our prices are as down-to-earth as our flavors."
	}),
	H({
		level: 2,
		attributes: {
			class: "page__sub__title"
		},
		child: "Meet the Team",
	}),
	P({
		attributes: {
			class: "container about__content"
		},
		child: "Behind the scenes, our crew is a motley crew of food enthusiasts, anime aficionados, and stardust seekers. We’re united by a shared love for the bizarre and a commitment to making your dining experience unforgettable. From the front-of-house supernovas to the kitchen constellations, we’re here to serve you with a dash of quirkiness and a sprinkle of magic."
	}),
	H({
		level: 2,
		attributes: {
			class: "page__sub__title"
		},
		child: "Visit Us",
	}),
	P({
		attributes: {
			class: "container about__content"
		},
		child: "So, fellow wanderer, whether you’re a seasoned Stand user or a curious foodie, come join us at Star Platinum. Let’s embark on a culinary odyssey—one where taste knows no bounds, and every forkful defies gravity. We promise you won’t need a Stand arrow to unlock the flavors—we’ve got that covered."
	}),
];

export default about;
