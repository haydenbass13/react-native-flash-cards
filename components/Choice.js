import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native";

class Choice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
    this.click = this.click.bind(this);
  }
  componentDidUpdate() {}
  click() {
    this.setState({ selected: true });
    return this.props.select ? this.props.select(this.props.choice) : null;
  }
  render() {
    return (
      <TouchableOpacity onPress={this.click}>
        <View className="choice" id={this.props.id}>
          <Text>
            {Number(this.props.number) + 1}) {this.props.choice}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Choice;
