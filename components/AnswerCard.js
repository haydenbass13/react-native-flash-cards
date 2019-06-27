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

class AnswerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.question
    };
  }
  render() {
    let index = this.props.options.indexOf(this.props.answer);
    return (
      <View className="answerCard">
        <View className="question">
          <Text>{this.props.question.question}</Text>
        </View>
        {this.props.options.map((el, i) => {
          let id = this.state.question.correct === el ? "correct" : "incorrect";
          return (
            <Choice key={i} select={null} choice={el} id={id} number={i} />
          );
        })}
        {this.props.answer ? (
          <View className="yourAnswer">
            <Text>You Selected:</Text>
            <Choice
              key={5}
              select={null}
              choice={this.props.answer}
              id="yourChoice"
              number={index}
            />
          </View>
        ) : null}
        <Button title="CONTINUE" onPress={this.props.nextQuestion}/>
      </View>
    );
  }
}

export default AnswerCard;
