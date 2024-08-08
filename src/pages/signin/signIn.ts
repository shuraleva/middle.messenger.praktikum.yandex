import SignInTmpl from "./signIn.hbs?raw";
import { Component, IComponentProps, PropsAndChildren } from "../../utils/Block";
import Button from "../../components/button";
import Field from "../../components/field";
import Form from "../../components/form";
import { inputValidator } from "../../utils/validator";
import { logFormData } from "../../utils/helpers";

export default class SignInForm extends Component<PropsAndChildren> {
    constructor(props: IComponentProps<PropsAndChildren>) {
        super(props);
    }

    render(): DocumentFragment {

        console.log("render SignInForm", this._props);
        return this.compile(SignInTmpl, { ...this._props });
    }
}

const signInButton = new Button({
    tagName: "div",
    propsAndChildren: {
        name: "signIn", text: "Вход", type: "submit"
    }
});

const goToSignUpButton = new Button({
    tagName: "div",
    propsAndChildren: {
        name: "signUp", text: "Зарегистрироваться", type: "button", class: "button__transparent", events: {
            click: e => {
                e.preventDefault(); e.stopPropagation(); window.location.href = "/signUp";
            }
        }
    }
});

const emailField = new Field({ tagName: "div", propsAndChildren: { type: "email", name: "email", text: "Email", value: "", events: { blur: [(e: Event) => { inputValidator(e.target!) }, true] } } });
const passwordField = new Field({ tagName: "div", propsAndChildren: { type: "password", name: "password", text: "Пароль", events: { blur: [(e: Event) => { inputValidator(e.target!) }, true] } } });

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
            }
        },
        content: [emailField, passwordField],
        buttons: [signInButton, goToSignUpButton]
    }
});

export const renderSignInForm = () =>
    new SignInForm({
        tagName: "main",
        propsAndChildren: {
            form: form
        }
    }).element;
