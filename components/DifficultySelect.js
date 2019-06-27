import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";


export default function Selector(props) {
  let config = {}
  config['type'] = props.type;
  config['value'] = props.value;
  return (
    <TouchableOpacity onPress={() => props.press(config)}>
      <View>
        <Text>{props.value}</Text>
      </View>
    </TouchableOpacity>
  );
}
