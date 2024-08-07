import ErrorsTmpl from "./errors.hbs?raw";
import ErrorTmpl from "./error.hbs?raw";
import { Component, IComponentProps, PropsAndChildren } from "../../utils/Block";
import Button from "../../components/button";
import Form from "../../components/form";

export class ErrorsForm extends Component<PropsAndChildren> {
    constructor(props: IComponentProps<PropsAndChildren>) {
        super(props);
    }

    render(): DocumentFragment {
        return this.compile(ErrorsTmpl, { ...this._props });
    }
}


interface IErrorProps extends PropsAndChildren {
    name: string;
    description: string;
}

export class ErrorComponent extends Component<IErrorProps> {
    constructor(props: IComponentProps<IErrorProps>) {
        super(props);
    }

    render(): DocumentFragment {
        return this.compile(ErrorTmpl, { ...this._props });
    }
}


const goToChatButton = new Button({
    tagName: "div",
    propsAndChildren: {
        name: "back", text: "Назад к чатам", type: "button", class: "button__transparent", events: {
            click: e => {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = "/chats";
            }
        }
    }
});

const error404 = new ErrorComponent({
    tagName: "div", propsAndChildren: {
        attr: {
            class: "d-vertical-center"
        },
        name: "404", description: "Не туда попали"
    }
});

const error500 = new ErrorComponent({
    tagName: "div", propsAndChildren: {
        attr: {
            class: "d-vertical-center"
        },
        name: "500", description: "Уже фиксим"
    }
});

export const renderErrorComponent = (number: string) =>
    new ErrorsForm({
        tagName: "main",
        propsAndChildren: {
            form: new Form({
                tagName: "form",
                propsAndChildren: {
                    title: "Ошибка",
                    class: "form",
                    attr: {
                        class: "form"
                    },
                    content: [number === "404" ? error404 : error500],
                    buttons: [goToChatButton]
                }
            })
        }
    }).render();
