import { H } from "../components/content";
import { Div } from "../components/layout";

const contact = [
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
						child: "Contact",
					})
				],
			})
		]
	}),
];

export default contact;
