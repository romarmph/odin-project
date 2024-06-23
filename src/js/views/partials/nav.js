import { Header, Nav, Div } from "../../components/layout";
import { createNavButtons } from "../../components/createNavButtons";
import { Img } from "../../components/content";
import starPlatinumLogo from "../../../../assets/star-platinum.svg"

const nav = Header({
	attributes: {
		class: 'header',
	},
	child: Div({
		attributes: {
			class: 'nav__container',
		},
		children: [
			Div({
				attributes: {
					class: 'brand',
				},
				child: Img({
					src: starPlatinumLogo,
				})
			}),
			Nav({
				attributes: {
					class: "nav",
				},
				children: createNavButtons(),
			})
		],
	}),
});

export default nav;

