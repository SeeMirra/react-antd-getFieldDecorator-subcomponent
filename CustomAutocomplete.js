import React from "react";
import "antd/dist/antd.css";
import { Icon, Input, AutoComplete } from "antd";
import FormItem from "antd/lib/form/FormItem";

class CustomAutocomplete extends React.Component {

  render() {
    const { getFieldDecorator } = this.props.Form.form;

    if (!this.props.ourDataSource) {
      var ourFullDataSource = [
        "Burns Bay Road",
        "Downing Street",
        "Wall Street"
      ];
    } else {
      var ourFullDataSource = this.props.ourDataSource;
    }

    return (

        <FormItem>
      {getFieldDecorator(this.props.uid,{initialValue: "",
        rules: [{required: this.props.Required, message: this.props.Message}]})(
      <AutoComplete
        className="certain-category-search" 
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={true}
        size="large"
        id2= {Math.random() * Math.random()}
        style={{ width: "100%" }}
        dataSource={ourFullDataSource}
        placeholder="input here"
        optionLabelProp="value"
        onSelect={this.props.onSelect}
        onSearch={this.props.handleSearch}
        filterOption={(inputValue, option) =>
        option.props.children
        .toUpperCase()
        .indexOf(inputValue.toUpperCase()) !== -1}
        >
        <Input suffix={<Icon type="search" className="certain-category-icon" />}  />
      </AutoComplete>      
      )}
      </FormItem>

      );
  }
}

export { CustomAutocomplete };
