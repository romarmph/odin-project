import { H } from "../components/content";
import { Div } from "../components/layout";


const menu = [
	Div({
		attributes: {
			class: "hero",
		},
		children: [
			Div({
				attributes: {},
				children: [
					H({
						level: 1,
						child: "Menu",
					})
				],
			})
		]
	}),
];

export default menu;
