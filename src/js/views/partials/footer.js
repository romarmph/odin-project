import { createPairedElement } from "../../components/factory";
import { Div, Nav } from "../../components/layout";
import { P, Img } from "../../components/content";
import { createNavButtons } from "../../components/createNavButtons";
import starPlatinumLogo from "../../../../assets/star-platinum.svg"

const footer = createPairedElement({
	element: 'footer',
	child: Div({
		attributes: {
			class: "container",
		},
		children: [
			Div({
				attributes: {
					class: "brand",
				},
				child: Img({
					src: starPlatinumLogo,
				}),
			}),
			Nav({
				attributes: {},
				children: createNavButtons(),
			}),
			P({
				child: "All rights reserved 2024"
			})
		],
	})
})

export default footer;
