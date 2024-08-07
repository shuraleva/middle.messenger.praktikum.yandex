import { Component, IComponentProps, PropsAndChildren } from '../../utils/Block';
import Messagetmpl from "./message.hbs?raw";

export interface IMessageProps extends PropsAndChildren {
    text: string;
    date?: string;
}

class MessageComponent extends Component<IMessageProps> {
    constructor(props: IComponentProps<IMessageProps>) {
        if (props.propsAndChildren) {
            props.propsAndChildren.date = new Date().toLocaleString();
            props.propsAndChildren.attr = { ...props.propsAndChildren.attr, class: "message__container " + (props.propsAndChildren.attr?.class || "") }
        }
        super(props);
    }

    render(): DocumentFragment {
        return this.compile(Messagetmpl, {...this._props});
    }
}

export default MessageComponent;

