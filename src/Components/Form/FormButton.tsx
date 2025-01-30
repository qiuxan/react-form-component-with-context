import React from "react";
import { Consumer } from "./formContext";

interface FormButtonProps {
	children: React.ReactNode;
}

const FormButton = (props: FormButtonProps) => {

	return <Consumer>
		{
			ctx=>{
				return <button 
					onClick={()=>{ctx?ctx.submit():undefined}}>
				{props.children}</button>
			}
		}
	</Consumer>;
}

export default FormButton;
