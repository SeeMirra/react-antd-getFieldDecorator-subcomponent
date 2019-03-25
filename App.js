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
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
       
        <Form>
                <CustomAutocomplete
                  Form={this.props}                
                  Required="False"
                  Message="Error Message"
                  uid="1234"                
                />

                <CustomAutocomplete
                  ourDataSource={dataSource2} 
                  Form={this.props}                
                  Required="True"
                  Message="Error Message2"                
                  uid="56782342"
                />

                <CustomAutocomplete
                  ourDataSource={dataSource2} 
                  Form={this.props}                
                  Required="True"
                  Message="Error Message3"                
                  uid="5678234234"
                />

                <CustomAutocomplete
                  ourDataSource={dataSource2} 
                  Form={this.props}                
                  Required="True"
                  Message="Error Message4"                
                  uid="5678234"
                />


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
