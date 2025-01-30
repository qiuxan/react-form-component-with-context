import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ctx, { FormContext } from './formContext'

interface InputProps {
  name: string
  type?: string
}

export default class FormInput extends Component<InputProps> {

  static contextType = ctx;
  declare context: FormContext;

  constructor(props: InputProps) {
    super(props)
  }

  static defaultProps = {
    type: 'text'
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }
  render() {
    return (
      <input 
      value={this.context.formData[this.props.name]||""} 
      type={this.props.type}
      onChange={(e) => {
        this.context.changeFormData(this.props.name, e.target.value)}}
       />
    )
  }
}
