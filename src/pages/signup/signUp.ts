import SignUpTmpl from "./signUp.hbs?raw";
import { Component, IComponentProps, PropsAndChildren } from "../../utils/Block";
import Button from "../../components/button";
import Field from "../../components/field";
import Form from "../../components/form";

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

const firstNameField = new Field({ tagName: "div", propsAndChildren: { type: "text", name: "first_name", text: "Имя" } });
const secondNameField = new Field({ tagName: "div", propsAndChildren: { type: "text", name: "second_name", text: "Фамилия" } });
const emailField = new Field({ tagName: "div", propsAndChildren: { type: "email", name: "email", text: "Email" } });
const passwordField = new Field({ tagName: "div", propsAndChildren: { type: "password", name: "password", text: "Пароль" } });
const loginField = new Field({ tagName: "div", propsAndChildren: { type: "text", name: "login", text: "Логин" } });

const form = new Form({
    tagName: "form",
    propsAndChildren: {
        title: "Вход",
        class: "form",
        attr: {
            class: "form"
        },
        //todo
        events: {
            submit: (e: Event) => {
                e.preventDefault(); 
                e.stopPropagation();
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
    }).render();
