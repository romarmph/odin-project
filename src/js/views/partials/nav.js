import { Header, Nav, Div } from "../../components/layout";
import { createNavButtons } from "../../components/createNavButtons";
import { Img } from "../../components/content";



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
					src: '../../../../assets/star-platinum.svg',
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

