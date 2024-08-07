import UserPasswordEditTmpl from "./userPasswordEdit.hbs?raw";
import { Component, IComponentProps, PropsAndChildren } from "../../utils/Block";
import Button from "../../components/button";
import Field from "../../components/field";
import Form from "../../components/form";

export default class PasswordEditForm extends Component<PropsAndChildren> {
    constructor(props: IComponentProps<PropsAndChildren>) {
        super(props);
    }

    render(): DocumentFragment {
        return this.compile(UserPasswordEditTmpl, { ...this._props });
    }
}

const signInButton = new Button({
    tagName: "div",
    propsAndChildren: {
        name: "save", text: "Сохранить изменения", type: "submit"
    }
});

const goToSignUpButton = new Button({
    tagName: "div",
    propsAndChildren: {
        name: "profile", text: "В профиль", type: "button", class: "button__transparent", events: {
            click: e => {
                e.preventDefault(); e.stopPropagation(); window.location.href = "/profile";
            }
        }
    }
});

const oldField = new Field({ tagName: "div", propsAndChildren: { type: "password", name: "oldPassword", text: "Старый пароль" } });
const newField = new Field({ tagName: "div", propsAndChildren: { type: "password", name: "newPassword", text: "Новый пароль" } });

const form = new Form({
    tagName: "form",
    propsAndChildren: {
        title: "Вход",
        attr: {
            class: "form"
        },
        //todo
        events: {submit: (e: Event) => {
            e.preventDefault(); 
            e.stopPropagation();
        }},
        content: [oldField, newField],
        buttons: [signInButton, goToSignUpButton]
    }
});

export const renderEditPasswordForm = () =>
    new PasswordEditForm({
        tagName: "main",
        propsAndChildren: {
            form: form
        }
    }).render();
