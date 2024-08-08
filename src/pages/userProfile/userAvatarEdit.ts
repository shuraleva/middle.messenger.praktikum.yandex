import { avatar } from "../../components/avatar";
import Button from "../../components/button";
import Form from "../../components/form";
import "../../main";
import { Component, IComponentProps, PropsAndChildren } from "../../utils/Block";
import UserAvatarEditTmpl from "./userAvatarEdit.hbs?raw";

class AvatarEditForm extends Component<PropsAndChildren> {
    constructor(props: IComponentProps<PropsAndChildren>) {
        super(props)
    }

    render() {
        return this.compile(UserAvatarEditTmpl, this._props);
    }
}

const avatarButton = new Button({
    tagName: "div",
    propsAndChildren: {
        name: "signUp", text: "Выбор файла", type: "button", class: "button__transparent", events: {
            click: e => {
                e.preventDefault(); 
                e.stopPropagation(); 
                const input = document.createElement("input");
                input.type = "file";
                input.click();
                document.removeChild(input);
            }
        }
    }
});
const submitButton = new Button({
    tagName: "div",
    propsAndChildren: {
        name: "save", text: "Сохранить", type: "submit", class: "button__transparent", events: {
            click: e => {
                e.preventDefault(); 
                e.stopPropagation(); 
                avatarForm.hide();
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
        title: "Профиль",
        content: [avatarButton],
        buttons: [submitButton],
        image: avatar()
    }
});

export const avatarForm = new AvatarEditForm({
    tagName: "main",
    propsAndChildren: {
        form: form
    }
});

export const renderAvatarEditProfile = () => avatarForm.element;
