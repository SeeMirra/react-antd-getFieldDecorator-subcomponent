import React from "react";
import "antd/dist/antd.css";
import { Icon, Input, AutoComplete } from "antd";
import FormItem from "antd/lib/form/FormItem";


const dataSource = ["Burns Bay Road", "Downing Street", "Wall Street"];

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


    var ourRequired = this.props.Required;
    var ourID = "autocomplete" + this.props.id3;
    return (

        <FormItem>
      {getFieldDecorator(ourID,{initialValue: "",
        rules: [{required: ourRequired, message: messageVal}]})(
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
