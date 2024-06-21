import { currentViewIndex } from "../viewState"
import { Button } from "./interactives";

export function createNavButtons() {
	const buttons = [
		"Home",
		"Menu",
		"About",
		"Contact",
	];

	return buttons.map((child, index) => {
		const button = Button({
			attributes: {
				class: "nav__button",
			},
			child: child,
		});
		button.addEventListener("click", () => currentViewIndex.update(() => index));
		if (index === 0) {
			button.classList.add('active');
		}
		currentViewIndex.subscribe((current) => {
			if (index === current) {
				button.classList.add('active');
			} else {
				button.classList.remove('active');
			}
		})
		return button;
	});
}
