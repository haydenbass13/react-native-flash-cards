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

import Selector from "./DifficultySelect";

class SelectTech extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
    };
    this.press = this.press.bind(this);
  }
  press(config) {
    this.setState({ [config.type]: config.value });
  }
  render() {
    return (
      <View>
        <View>
          <Text>Select Tech</Text>
          <Selector value={30} type="timer" press={this.press} />
          <Selector value={60} type="timer" press={this.press} />
          <Selector value={120} type="timer" press={this.press} />
        </View>
        <Button title="Submit" onPress={() => this.props.tierSelect(this.state)} />
        <Text>{JSON.stringify(this.state)}</Text>
      </View>
    );
  }
}
export default SelectTech;
