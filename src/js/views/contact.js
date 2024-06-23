import { H, Label } from "../components/content";
import { Div, Form } from "../components/layout";
import { TextInput, Button } from "../components/interactives";

const contact = [
	H({
		level: 1,
		attributes: {
			class: "page__title",
		},
		child: "Get a Reservation"
	}),
	Div({
		attributes: {
			class: "container form__container",
		},
		child: Form({
			attributes: {
				action: "",
				method: "GET",
			},
			children: [
				Div({
					attributes: {
						class: "form__group",
					},
					children: [
						Label({
							attributes: {
								for: "name",
							},
							child: "Name"
						}),
						TextInput({
							type: "text",
							name: "name",
							id: "name",
							placeholder: "Type your name here..."
						}),
					],
				}),
				Div({
					attributes: {
						class: "form__group",
					},
					children: [
						Label({
							attributes: {
								for: "email",
							},
							child: "Email"
						}),
						TextInput({
							type: "text",
							name: "email",
							id: "email",
							placeholder: "Type your email here"
						}),
					],
				}),
				Div({
					attributes: {
						class: "form__group",
					},
					children: [
						Label({
							attributes: {
								for: "contact",
							},
							child: "Contact No."
						}),
						TextInput({
							type: "text",
							name: "contact",
							id: "contact",
							placeholder: "Type your contact number here"
						}),
					],
				}),
				Button({
					attributes: {
						type: "submit",
					},
					child: "Submit"
				})
			],
		}),
	}),
];

export default contact;
