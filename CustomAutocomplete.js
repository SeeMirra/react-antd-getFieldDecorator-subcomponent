import React from "react";
import "antd/dist/antd.css";
import { Icon, Input, AutoComplete } from "antd";
import FormItem from "antd/lib/form/FormItem";

const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;

const dataSource = ["Burns Bay Road", "Downing Street", "Wall Street"];

function renderTitle(title) {
  return (
    <span>
      {title}
      <a
        style={{ float: "right" }}
        href="https://www.google.com/search?q=something"
        target="_blank"
        rel="noopener noreferrer"
      >
        ??
      </a>
    </span>
  );
}

class CustomAutocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ourDataSource: ""
    };
  }

  componentDidMount() {
    this.setState({
      ourDataSource: this.props.ourDataSource
    });
   
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({
      ourDataSource: nextProps["ourDataSource"]
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

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

    if (this.props.Required) {
      var requiredVal = true;
    } else {
      var requiredVal = false;
    }

    if (this.props.Message) {
      var messageVal = this.props.Message;
    } else {
      var messageVal = "noval";
    }
 
    var ourID = "autocomplete" + this.props.id3;
    console.log(ourID);
console.log(this.props.id3);
    console.log(this.props.Required);
    console.log(this.props.Message);
    return (
        <FormItem>
      {getFieldDecorator(ourID,{initialValue: "",
        rules: [{required: {requiredVal}, message: messageVal}]})(
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

export { dataSource, OptGroup, Option, CustomAutocomplete };
