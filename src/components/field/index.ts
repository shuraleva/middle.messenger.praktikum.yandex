import { Component, IComponentProps, PropsAndChildren } from "../../utils/Block";
import Fieldtmpl from "./field.hbs?raw";
import Inputtmpl from "./input.hbs?raw";

export interface IFieldProps extends PropsAndChildren {
  class?: string;
  type: string;
  name: string;
  value?: string;
  text: string;
  events?: object;
};

class Field extends Component<IFieldProps> {

  constructor(props: IComponentProps<IFieldProps>) {

    if (props.propsAndChildren) {
      props.propsAndChildren.attr = { ...props.propsAndChildren.attr, class: "field " + (props.propsAndChildren.attr?.class || "") }
      props.propsAndChildren.input = new Input({tagName: "input", propsAndChildren: {
        attr: {
          type: props.propsAndChildren.type, 
          name: props.propsAndChildren.name, 
          value: props.propsAndChildren.value, 
          title: props.propsAndChildren.text 
        }, 
        events: {...props.propsAndChildren.events }}});
      props.propsAndChildren.events = {};
    }
    super({...props});
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

class Input extends Component<PropsAndChildren> {
  constructor(props: IComponentProps<PropsAndChildren>) {
    props.propsAndChildren!.attr!.class = "field__input";
    super(props);
  }

  render(): Node | void {
    return this.compile(Inputtmpl, this._props)
  }
}

export default Field;
