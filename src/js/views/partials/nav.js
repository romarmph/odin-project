import { Header, Nav } from "../../components/layout";
import { Button } from "../../components/interactives";
import { currentViewIndex } from "../../viewState";

const buttons = [
	"Home",
	"Menu",
	"About",
	"Contact",
];

const nav = Header({
	child: Nav({
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
	}),
});

export default nav;

