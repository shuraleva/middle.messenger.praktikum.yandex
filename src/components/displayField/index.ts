import { Component, IComponentProps, PropsAndChildren } from "../../utils/Block";
import Fieldtmpl from "./displayField.hbs?raw";

export interface IDisplayFieldProps extends PropsAndChildren {
    label: string;
    value: string;
};

class DisplayField extends Component<IDisplayFieldProps> {

    constructor(props: IComponentProps<IDisplayFieldProps>) {

        if (props.propsAndChildren) {
            props.propsAndChildren.attr = { ...props.propsAndChildren.attr, class: "display-field " + (props.propsAndChildren.attr?.class || "") }
        }
        super(props);
    }

    render() {
        return this.compile(Fieldtmpl, this._props);
    }
}

export default DisplayField;
