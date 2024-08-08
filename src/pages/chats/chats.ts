import ChatComponent from "../../components/chat";
import MessageComponent, { IMessageProps } from "../../components/message";
import { Component, IComponentProps, PropsAndChildren } from "../../utils/Block";
import Chatstmpl from "./chats.hbs?raw";
import ChatInputtmpl from "./chatInput.hbs?raw";

export interface IChatsProps extends PropsAndChildren {
    chats: Component<PropsAndChildren>[];
    messages: Component<IMessageProps>[];
    input?: Component<PropsAndChildren>;
};

class ChatsComponent extends Component<IChatsProps> {
    constructor(props: IComponentProps<IChatsProps>) {
        super(props);
    }

    render() {
        return this.compile(Chatstmpl, this._props);
    }
}

export interface IChatInputProps extends PropsAndChildren {
    value: string;
};

class ChatInputComponent extends Component<IChatInputProps> {
    constructor(props: IComponentProps<IChatInputProps>) {
        super(props);
    }

    render() {
        return this.compile(ChatInputtmpl, this._props);
    }
}

export default ChatsComponent;


export const renderChatsComponent = () => {
    const chatComponent = new ChatsComponent({
        tagName: "main",
        propsAndChildren: {
            chats: [new ChatComponent({
                tagName: "div",
                propsAndChildren: {
                    userName: "Andrew",
                    message: "Привет, как дела?"
                }
            })],
            messages: [new MessageComponent({
                tagName: "div",
                propsAndChildren: {
                    text: "lalalalal alallala lalala"
                }
            })
            ],
            input: new ChatInputComponent({
                tagName: "div",
                propsAndChildren: {
                    value: "",
                    events: {
                        keyup: (e: KeyboardEvent) => {
                            e.preventDefault();
                            const target: HTMLInputElement = e.target as HTMLInputElement;
                            if (!target.value) {
                                alert("Нельзя отправить пустое сообщение!");
                                return;
                            }
                            if (target.name === "message" && e.key === "Enter") {
                                chatComponent.setProps({ ...chatComponent._props, messages: [...(chatComponent._lists.messages as [] || []), new MessageComponent({ propsAndChildren: { text: target.value } })] })
                                target.value = "";
                                target.focus();
                            }
                        }
                    }
                }
            })
        }
    });

    return chatComponent.element;
}
