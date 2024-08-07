import { Component, IComponentProps, PropsAndChildren } from "../../utils/Block";
import Fieldtmpl from "./field.hbs?raw";

export interface IFieldProps extends PropsAndChildren {
  class?: string;
  type: string;
  name: string;
  value?: string;
  text: string;
  placeholder?: string,
  disabled?: string | undefined;
  events?: {
    blur?: () => void;
    click?: () => void;
  };
};

class Field extends Component<IFieldProps> {

  constructor(props: IComponentProps<IFieldProps>) {

    if (props.propsAndChildren) {
      props.propsAndChildren.attr = { ...props.propsAndChildren.attr, class: "field " + (props.propsAndChildren.attr?.class || "") }
    }
    super(props);
  }

  getValue() {
    const element = document.getElementById(
      `${this._props.id}`,
    ) as HTMLInputElement;
    const { value } = element;
    return value;
  }

  render() {
    return this.compile(Fieldtmpl, this._props);
  }
}

export default Field;
