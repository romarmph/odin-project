import { H } from "../components/content";
import { Div } from "../components/layout";

const home = [
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
						child: "Home",
					})
				],
			})
		]
	}),
];

export default home;
