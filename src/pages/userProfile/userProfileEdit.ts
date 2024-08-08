import { avatar } from "../../components/avatar";
import Button from "../../components/button";
import Field from "../../components/field";
import Form from "../../components/form";
import "../../main";
import { Component, IComponentProps, PropsAndChildren } from "../../utils/Block";
import { logFormData } from "../../utils/helpers";
import { inputValidator } from "../../utils/validator";
import UserProfileEditTmpl from "./userProfileEdit.hbs?raw";

class UserProfileEditForm extends Component<PropsAndChildren> {
    constructor(props: IComponentProps<PropsAndChildren>) {
        super(props)
    }

    render() {
        return this.compile(UserProfileEditTmpl, { ...this._props });
    }
}

const firstNameField = new Field({ tagName: "div", propsAndChildren: { text: "Имя", name: "first_name", type: "text", value: "Tatyana", events: { blur: [(e: Event) => { inputValidator(e.target!) }, true] } } });
const secondNameField = new Field({ tagName: "div", propsAndChildren: { text: "Фамилия", name: "second_name", type: "text", value: "Ivanova", events: { blur: [(e: Event) => { inputValidator(e.target!) }, true] } } });
const displayNameField = new Field({ tagName: "div", propsAndChildren: { text: "Имя в чате", name: "display_name", type: "text" } });
const emailField = new Field({ tagName: "div", propsAndChildren: { text: "Email", name: "email", type: "email", value: "aaa@yandex.ru", events: { blur: [(e: Event) => { inputValidator(e.target!) }, true] } } });
const loginField = new Field({ tagName: "div", propsAndChildren: { text: "Логин", name: "login", type: "text", value: "myBestLogin", events: { blur: [(e: Event) => { inputValidator(e.target!) }, true] } } });
const phoneField = new Field({ tagName: "div", propsAndChildren: { text: "Телефон", name: "phone", type: "text", value: "89099090909", events: { blur: [(e: Event) => { inputValidator(e.target!) }, true] } } });

const submitButton = new Button({
    tagName: "div",
    propsAndChildren: {
        name: "saveChanges", text: "Сохранить изменения", type: "submit"
    }
});

const toProfileButton = new Button({
    tagName: "div",
    propsAndChildren: {
        name: "profile", text: "В профиль", type: "button", class: "button__transparent", events: {
            click: e => {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = "/profile";
            }
        }
    }
});

const form = new Form({
    tagName: "form",
    propsAndChildren: {
        withImage: "true",
        attr: {
            class: "form"
        },
        title: "Редактирование",
        content: [firstNameField, secondNameField, displayNameField, emailField, loginField, phoneField],
        buttons: [submitButton, toProfileButton],
        image: avatar(),
        events: {
            submit: (e: Event) => {
                logFormData(e.target as HTMLFormElement);
            }
        }
    }
});

export const renderUserEditProfile = () =>
    new UserProfileEditForm({
        tagName: "main",
        propsAndChildren: {
            form: form
        }
    }).element;
