import { avatar } from "../../components/avatar";
import Button from "../../components/button";
import DisplayField from "../../components/displayField";
import Form from "../../components/form";
import "../../main";
import { Component, IComponentProps, PropsAndChildren } from "../../utils/Block";
import { avatarForm, renderAvatarEditProfile } from "./userAvatarEdit";
import UserProfileTmpl from "./userProfile.hbs?raw";

class UserProfileDisplayForm extends Component<PropsAndChildren> {
    constructor(props: IComponentProps<PropsAndChildren>) {
        super(props)
    }

    render() {
        return this.compile(UserProfileTmpl, this._props);
    }
}

const firstNameField = new DisplayField({ tagName: "div", propsAndChildren: { label: "Имя", value: "Tatyana" } });
const secondNameField = new DisplayField({ tagName: "div", propsAndChildren: { label: "Фамилия", value: "Ivanova" } });
const displayNameField = new DisplayField({ tagName: "div", propsAndChildren: { label: "Имя в чате", value: "Tatyana Mikhailovna" } });
const emailField = new DisplayField({ tagName: "div", propsAndChildren: { label: "Email", value: "aaa@yandex.ru" } });
const loginField = new DisplayField({ tagName: "div", propsAndChildren: { label: "Логин", value: "myBestLogin" } });
const phoneField = new DisplayField({ tagName: "div", propsAndChildren: { label: "Телефон", value: "89099090909" } });

const changeUserProfileButton = new Button({
    tagName: "div",
    propsAndChildren: {
        name: "signUp", text: "Редактировать профиль", type: "button", class: "button__transparent", events: {
            click: e => {
                e.preventDefault(); 
                e.stopPropagation(); 
                window.location.href = "/editProfile";
            }
        }
    }
});
const changePasswordButton = new Button({
    tagName: "div",
    propsAndChildren: {
        name: "signUp", text: "Изменить пароль", type: "button", class: "button__transparent", events: {
            click: e => {
                e.preventDefault(); 
                e.stopPropagation(); 
                window.location.href = "/editPassword";
            }
        }
    }
});

const avatarButton = new Button({
    tagName: "div",
    propsAndChildren: {
        name: "signUp", text: "Изменить аватар", type: "button", class: "button__transparent", events: {
            click: e => {
                e.preventDefault(); 
                e.stopPropagation();
                userProfile._element?.append(renderAvatarEditProfile()!);
                avatarForm.show();
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
        content: [firstNameField, secondNameField, displayNameField, emailField, loginField, phoneField],
        buttons: [changeUserProfileButton, changePasswordButton, avatarButton],
        image: avatar()
    }
});

const userProfile = new UserProfileDisplayForm({
    tagName: "main",
    propsAndChildren: {
        form: form
    }
});

export const renderUserProfile = () => {
    return userProfile.element;
}
