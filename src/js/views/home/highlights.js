import { Div } from "../../components/layout";
import { P } from "../../components/content";
import { Button } from "../../components/interactives";

const highlights = Div({
	attributes: {
		class: 'highlights container',
	},
	children: [
		P({
			attributes: {
				class: ""
			},
			child: "Every bite should be a stand-worthy adventure. Dive into a world of extraordinarily bizarre flavors and quench your quest for fantastic gourmet food!"
		}),
		Button({
			attributes: {
				class: "button",
			},
			child: "Let's see the menu!",
		}),
		Button({
			attributes: {
				class: "button",
			},
			child: "Really?! I'm in!",
		}),
	]
})


export default highlights;
