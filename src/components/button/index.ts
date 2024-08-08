// import './button.css';
import { Component, IComponentProps, PropsAndChildren } from '../../utils/Block';
import Buttontmpl from './button.hbs?raw';

export interface IButtonProps extends PropsAndChildren {
    name: string;
    text: string;
    type: string;
    events?: {
        click?: (evt: Event) => void;
    };
}

class Button extends Component<IButtonProps> {
    constructor(props: IComponentProps<IButtonProps>) {
        if (props.propsAndChildren) {
            props.propsAndChildren.attr = { ...props.propsAndChildren.attr, class: "button__container " + (props.propsAndChildren.attr?.class || "")} 
        }
        super(props);
    }
    render() {
        return this.compile(Buttontmpl, this._props);
    }
}

export default Button;
