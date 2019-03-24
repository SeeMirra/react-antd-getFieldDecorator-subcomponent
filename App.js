import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CustomAutocomplete } from "./CustomAutocomplete";
import { Form } from "antd";
import FormItem from 'antd/lib/form/FormItem';

const dataSource2 = ["asdf", "qwer", "zxcv"];
class App extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    console.log('111: ', getFieldDecorator);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
       
        <Form>
        <CustomAutocomplete
                  ourDataSource={dataSource2} 
                  Form={this.props}                
                 // onSelect={this.onSelect.bind(this)}
                  handleSearch={this.handleSearch}
                  Required="False"
                  Message="Error Message"
                  id3="1234"                
                />

<CustomAutocomplete
                  ourDataSource={dataSource2} 
                  Form={this.props}                
                 // onSelect={this.onSelect.bind(this)}
                  handleSearch={this.handleSearch}
                  Required="False"
                  Message="Error Message2"                
                  id3="5678"
                />
<FormItem>
{getFieldDecorator('fieldname3',{initialValue: "",
        rules: [{required: "False", message: "Whatever2"}]})(
<CustomAutocomplete
                  ourDataSource={dataSource2} 
                  Form={this.props}                
                 // onSelect={this.onSelect.bind(this)}
                  handleSearch={this.handleSearch}
                  Required="False"
                  Message="Error Message3"  
                  id3="9101" 
                  />
                )}</FormItem>

<FormItem>
                {getFieldDecorator('fieldname2',{initialValue: "",
        rules: [{required: true, message: "Whatever2"}]})(
                  <input></input>
                  )}
                </FormItem>

                <FormItem>
                {getFieldDecorator('fieldname3',{initialValue: "",
        rules: [{required: true, message: "Whatever2"}]})(
                  <input></input>
                  )}
                </FormItem>
</Form>
</header>
      </div>

    );
  }
}

export default Form.create({ name: "normal_form" })(App);
