import { H, Img, Span } from "../../components/content";
import { Div } from "../../components/layout";

const hero = Div({
	attributes: {
		class: "hero",
	},
	child: Div({
		attributes: {
			class: "container",
		},
		children: [
			Div({
				attributes: {
					class: "hero__content__container"
				},
				children: [
					Img({
						src: "../../../assets/star-purple.svg",
						alt: "purple-star-icon",
						class: 'purple star'
					}),
					Img({
						src: "../../../assets/star-yellow.svg",
						alt: "yellow-star-icon",
						class: 'yellow star'
					}),
					H({
						level: 1,
						children: [
							"START YOUR ",
							Span({
								child: "BIZZARE ",
								attributes: {
									class: 'bizzare',
								}
							}),
							"FOOD ",
							Span({
								child: "ADVENTURE",
								attributes: {
									class: 'adventure',
								}
							})
						]
					})
				],
			})
		],
	})
});

export default hero;
