import { H } from "../components/content";
import { Div } from "../components/layout";

const about = [
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
						child: "About",
					})
				],
			})
		]
	}),
];

export default about;
