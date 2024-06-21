import { Div } from "../../components/layout"
import { Img, P, H, Span } from "../../components/content"

const content1 = Div({
	attributes: {
		class: "content-1",
	},
	children: [
		Div({
			child: Img({
				src: "../../../assets/image-1.webp",
			}),
		}),
		Div({
			attributes: {},
			children: [
				P({
					attributes: {},
					child: "Come and check us out. Find more info about our out of this world dinner."
				}),
				H({
					level: 2,
					children: [
						Span({
							child: "BIZZARE",
						}),
						Span({
							child: "ADVENTUROUS",
						}),
						Span({
							child: "DINNER",
						}),
					],
				}),
				P({
					child: "Enjoy a unique meal that kicks different flavor in each and every bite!"
				})
			],
		}),
	],
})

export default content1;
