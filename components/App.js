// import "@babel/polyfill";
import React from "react";
import Axios from "axios";
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
import t from "tcomb-form-native";
import SelectTech from "./SelectTech";
import QCard from "./QCard";
import AnswerCard from "./AnswerCard";
import StartButton from "./StartButton";

let reactQs = [
  {
    question: "Who authored React?",
    correct: "Facebook",
    incorrect: ["Google", "NPM"]
  },
  {
    question: "Which is NOT a feature of React",
    correct: "It can directly update HTML",
    incorrect: [
      "It uses the virtual DOM instead of the real DOM",
      "It uses server-side rendering"
    ]
  },
  {
    question: "Which is not a limitation of React?",
    correct: "React cannot be used with CSS.",
    incorrect: [
      "React is just a library, not a full-blown framework",
      " Coding gets complex as it uses inline templating and JSX"
    ]
  },
  {
    question: "Why can't browsers read JSX?",
    correct: "JSX is not a regular JavaScript object.",
    incorrect: ["Browsers can read JSX.", "Browsers cannot understand ES6."]
  },
  {
    question: "Which is true of Angular, NOT React?",
    correct: "Complete MVC",
    incorrect: ["Uses virtual DOM", "Compile time debugging"]
  },
  {
    question: "How can you update the state of a React component?",
    correct: "this.setState({})",
    incorrect: ["componentDidMount()", "componentDidUpdate()"]
  },
  {
    question: "Which of the following is not an appropriate uses for Refs?",
    correct: "Update State",
    incorrect: [
      "To trigger imperative animations",
      "Integrate with third-party DOM libraries"
    ]
  },
  {
    question: "Which is true of Controlled Components?",
    correct: "They do not maintain their own state",
    incorrect: [
      "Data is controlled by the DOM",
      "Refs are used to get their current values"
    ]
  },
  {
    question:
      "Which of the following is not an appropriate use for Higher Order Components?",
    correct: "Manipulating the DOM",
    incorrect: [
      "Code reuse, logic and bootstrap abstraction",
      "Props manipulation"
    ]
  },
  {
    question:
      "Which is not one of the three principals followed by the Redux library?",
    correct: "Multiple sources of truth",
    incorrect: ["State is read-only", "Changes are made with pure functions"]
  },
  {
    question: "Which is not a component of Redux?",
    correct: "Model",
    incorrect: ["Store", "View"]
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: reactQs,
      currentStep: SelectTech,
      timer: 3,
      currentQuestion: 0,
      options: [],
      answer: null
    };
    this.gameConfig = this.gameConfig.bind(this);
    this.gameStart = this.gameStart.bind(this);
    this.showAnswer = this.showAnswer.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.selectAnswer = this.selectAnswer.bind(this);
  }
  gameConfig(config) {
    this.setState({ timer: config.timer, currentStep: StartButton });
  }

  componentDidMount() {
    this.shuffleOptions();
  }

  gameStart() {
    this.setState({ currentStep: QCard });
  }
  showAnswer() {
    this.setState({ currentStep: AnswerCard });
  }

  nextQuestion() {
    let nextIndex = this.state.currentQuestion + 1;
    if (!this.state.cards[nextIndex]) nextIndex = 0;
    let arr = [];
    arr.push(
      this.state.cards[nextIndex].correct,
      this.state.cards[nextIndex].incorrect[0],
      this.state.cards[nextIndex].incorrect[1]
    );
    arr = arr.sort(() => Math.random() - 0.5);
    this.setState({
      currentQuestion: nextIndex,
      currentStep: QCard,
      answer: null,
      options: arr
    });
    // this.shuffleOptions();
  }

  shuffleOptions() {
    let arr = [];
    arr.push(
      this.state.cards[this.state.currentQuestion].correct,
      this.state.cards[this.state.currentQuestion].incorrect[0],
      this.state.cards[this.state.currentQuestion].incorrect[1]
    );
    arr = arr.sort(() => Math.random() - 0.5);
    this.setState({ options: arr });
  }
  selectAnswer(answer) {
    this.setState({ answer });
  }

  render() {
    let Comp = this.state.currentStep;
    return (
      <View className="mainWrapper">
        <Comp
          tierSelect={this.gameConfig}
          gameStart={this.gameStart}
          question={this.state.cards[this.state.currentQuestion]}
          time={this.state.timer}
          showAnswer={this.showAnswer}
          nextQuestion={this.nextQuestion}
          options={this.state.options}
          answer={this.state.answer}
          selectAnswer={this.selectAnswer}
        />
        <Text>{this.state.answer}</Text>
      </View>
    );
  }
}

export default App;
