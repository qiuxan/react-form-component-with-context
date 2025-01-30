import React, { Component } from "react";
import { Provider } from "./formContext";
import FormInput from "./FormInput";
import PropTypes from "prop-types";
import FormButton from "./FormButton";

interface FormProps {
    children: React.ReactNode;
    onSubmit?: (formData: { [key: string]: string }) => void;
}

export default class Form extends Component<FormProps> {

    static propTypes = {
        children: PropTypes.node,
        onSubmit: PropTypes.func
    }
	state = {
        formData:{},
        changeFormData:(name:string, val:string)=>{
            this.setState({
                formData:{
                    ...this.state.formData,
                    [name]:val
                }
            })
        },
        submit:()=>{
            if(this.props.onSubmit){
                this.props.onSubmit(this.state.formData);
            }
        }

    }
    static Input: typeof FormInput;
    static Button: typeof FormButton;

	render() {
		return <Provider value={this.state}>
            {this.props.children}
        </Provider>;
	}
}

Form.Input = FormInput;
Form.Button = FormButton;
