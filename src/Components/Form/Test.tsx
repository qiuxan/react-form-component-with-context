import React, { Component } from "react";
import Form from ".";
import ctx from "./formContext";

export default class FormTest extends Component {

	render() {
		return (
			<>
            
				<Form onSubmit={ data=>{console.log(data)}}>
                    <div>
                        ID: <Form.Input name="loginId" ></Form.Input>
                    </div>

                    <div>
                        Password:<Form.Input name="loginPwd" type="password"></Form.Input>
                    </div>
                    <Form.Button>Submit</Form.Button>
                </Form>
			</>
		);
	}
}
