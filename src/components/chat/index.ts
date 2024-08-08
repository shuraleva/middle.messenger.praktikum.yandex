import { Component, IComponentProps, PropsAndChildren } from "../../utils/Block";
import Chattmpl from "./chat.hbs?raw";

export interface IChatProps extends PropsAndChildren {
    userName: string;
    message: string;
    class?: string;
};

class ChatComponent extends Component<IChatProps> {
    constructor(props: IComponentProps<IChatProps>) {
        super(props);
    }

    render() {
        return this.compile(Chattmpl, this._props);
    }
}

export default ChatComponent;
