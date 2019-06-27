import React from "react";
import Choice from "./Choice";
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
  FormValidationMessage,
  Alert
} from "react-native";

class QCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time,
      question: this.props.question,
      selected: null
    };
    this.decrement = this.decrement.bind(this);
    this.timeUp = this.timeUp.bind(this);
    this.select = this.select.bind(this);
  }
  componentDidMount() {
    let decremented = this.state.time - 1;
    this.setState({ time: decremented });
  }
  componentDidUpdate() {
    this.timer();
  }
  decrement() {
    let current = this.state.time;
    let decremented = current - 1;

    this.setState({ time: decremented });
  }
  async timer() {
    if (this.state.time) {
      await setTimeout(this.decrement, 1000);
    } else {
      this.timeUp(this.state);
    }
  }
  timeUp(stateObj) {
    if (!stateObj.selected) {
      Alert.alert(
        "Need More Time?",
        "",
        [
          {
            text: "Yes",
            onPress: () => this.setState({ time: 30 })
          },
          {
            text: "Give Up",
            onPress: () => this.props.showAnswer(),
            style: "cancel"
          }
        ],
        { cancelable: false }
      );
    }
    else return this.props.showAnswer()
  }
  select(choice) {
    this.setState({ selected: choice, time: 0 });
    this.props.selectAnswer(choice);
  }

  render() {
    return (
      <View>
        <View className="question">
          <Text>{this.props.question.question}</Text>
        </View>
        <View className="choices">
          {this.props.options.map((el, i) => (
            <Choice key={i} select={this.select} choice={el} number={i} />
          ))}
        </View>
        <View className="timer">
          <View className="timerMinutes">
            <Text>
              {Math.floor(this.state.time / 60).toString().length === 2
                ? Math.floor(this.state.time / 60)
                : "0" + Math.floor(this.state.time / 60)}
              :
              {Math.ceil(this.state.time % 60).toString().length === 2
                ? Math.ceil(this.state.time % 60)
                : "0" + Math.ceil(this.state.time % 60)}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default QCard;
