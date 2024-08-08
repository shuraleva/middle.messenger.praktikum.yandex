import { Component, IComponentProps, PropsAndChildren } from '../../utils/Block';
import Formtmpl from "./form.hbs?raw";

export interface IFormProps extends PropsAndChildren {
    title: string;
    content: Component<PropsAndChildren>[];
    buttons: Component<PropsAndChildren>[];
    withImage?: string;
}

class Form extends Component<IFormProps> {
    constructor(props: IComponentProps<IFormProps>) {
        super(props);
    }

    render(): DocumentFragment {
        return this.compile(Formtmpl, {...this._props});
    }
}

export default Form;
