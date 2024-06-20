import { Header, Nav, Div } from "../../components/layout";
import { Button } from "../../components/interactives";
import { currentViewIndex } from "../../viewState";
import { Img } from "../../components/content";

const buttons = [
	"Home",
	"Menu",
	"About",
	"Contact",
];

const nav = Header({
	attributes: {
		class: 'header',
	},
	child: Div({
		attributes: {
			class: 'nav__container',
		},
		children: [
			Div({
				attributes: {
					class: 'brand',
				},
				child: Img({
					src: '#',
				})
			}),
			Nav({
				attributes: {
					class: "nav",
				},
				children: buttons.map((child, index) => {
					const button = Button({
						attributes: {
							class: "nav__button",
						},
						child: child,
					});
					button.addEventListener("click", () => currentViewIndex.update(() => index));
					return button;
				})
			})
		],
	}),
});

export default nav;

