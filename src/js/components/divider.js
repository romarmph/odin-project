import { createUnpairedElement } from "./factory";
import { Img } from "../components/content";
import { Div } from "../components/layout"

export function Divider(attributes = {}) {
	const hr = createUnpairedElement({ element: 'hr' });

	if (attributes.hasOwnProperty('class')) {
		attributes.class = 'divider ' + attributes.class;
	} else {
		attributes.class = 'divider';
	}

	return Div({
		attributes,
		children: [
			Img({
				src: '../../../assets/star-dark.svg',
			}),
			hr,
			Img({
				src: '../../../assets/star-dark.svg',
			})
		]
	})
}
