import React from "react";

export interface FormContext {
    formData: { [key: string]: string };   
    changeFormData: (name: string, val: string) => void;
    submit: () => void;
}

const ctx = React.createContext<FormContext | undefined >(undefined);

export const {Provider, Consumer} = ctx;

export default ctx;