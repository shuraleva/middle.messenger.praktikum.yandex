import { Component, IComponentProps, PropsAndChildren } from "../../utils/Block";
import Avatartmpl from "./avatar.hbs?raw";

export interface IAvatarProps extends PropsAndChildren {
    src: string;
};

export default class AvatarComponent extends Component<IAvatarProps> {
    constructor(props: IComponentProps<IAvatarProps>) {
        super(props);
    }

    render() {
        return this.compile(Avatartmpl, this._props);
    }
}

export const avatar = () => new AvatarComponent({tagName: "div", propsAndChildren: {
    src: "../../../static/avatar.svg"
}});
