import * as styles from "../style.css";
import { Div } from "./components/layout";
import { currentViewIndex } from "./viewState";
import about from "./views/about";
import contact from "./views/contact";
import home from "./views/home";
import menu from "./views/menu";
import footer from "./views/partials/footer";
import nav from "./views/partials/nav";
import { TabViews } from "./views/views";

function App({
	children,
	attributes,
}) {
	let body = document.querySelector('body');
	const script = document.getElementsByTagName('script');

	for (let prop in attributes) {
		body.setAttribute(prop, attributes[prop]);
	}

	if (script.length > 0) {
		for (let node of children) {
			body.insertBefore(node, script[0]);
		}
	}
}

App({
	attributes: {},
	children: [
		nav,
		TabViews({
			views: [
				home,
				menu,
				about,
				contact,
			],
			parent: Div({
				attributes: {
					id: "content",
				},
			}),
			observable: currentViewIndex,
		}),
		footer
	]
});
