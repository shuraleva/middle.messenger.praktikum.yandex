import SignUpTmpl from "./signUp.hbs?raw";
import { Component, IComponentProps, PropsAndChildren } from "../../utils/Block";
import Button from "../../components/button";
import Field from "../../components/field";
import Form from "../../components/form";
import { inputValidator } from "../../utils/validator";
import { logFormData } from "../../utils/helpers";

export default class SignUpForm extends Component<PropsAndChildren> {
    constructor(props: IComponentProps<PropsAndChildren>) {
        super(props);
    }

    render(): DocumentFragment {
        return this.compile(SignUpTmpl, { ...this._props });
    }
}

const signUpButton = new Button({
    tagName: "div",
    propsAndChildren: {
        name: "signUp", text: "Зарегистрироваться", type: "submit", class: "button__transparent"
    }
});

const firstNameField = new Field({ tagName: "div", propsAndChildren: { type: "text", name: "first_name", text: "Имя", events: { blur: [(e: Event) => { inputValidator(e.target!) }, true] }   } });
const secondNameField = new Field({ tagName: "div", propsAndChildren: { type: "text", name: "second_name", text: "Фамилия", events: { blur: [(e: Event) => { inputValidator(e.target!) }, true] }  } });
const emailField = new Field({ tagName: "div", propsAndChildren: { type: "email", name: "email", text: "Email", events: { blur: [(e: Event) => { inputValidator(e.target!) }, true] }   } });
const passwordField = new Field({ tagName: "div", propsAndChildren: { type: "password", name: "password", text: "Пароль", events: { blur: [(e: Event) => { inputValidator(e.target!) }, true] }   } });
const loginField = new Field({ tagName: "div", propsAndChildren: { type: "text", name: "login", text: "Логин", events: { blur: [(e: Event) => { inputValidator(e.target!) }, true] }    } });

const form = new Form({
    tagName: "form",
    propsAndChildren: {
        title: "Вход",
        class: "form",
        attr: {
            class: "form"
        },
        events: {
            submit: (e: Event) => {
                logFormData(e.target as HTMLFormElement);
        }},
        content: [firstNameField, secondNameField, emailField, passwordField, loginField],
        buttons: [signUpButton]
    }
});

export const renderSignUpForm = () =>
    new SignUpForm({
        tagName: "main",
        propsAndChildren: {
            form: form
        }
    }).element;
