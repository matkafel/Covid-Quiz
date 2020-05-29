import React, { Component } from "react";
import QuestionsList from "../db/QuestionsList";
import Nav from "./Nav";
import history from "./history";
import "../style/Quiz.css";
import "../style/style.css";

class Quiz extends Component {
  state = {
    currIndex: 0,
    options: [],
    userAnswer: null,
    score: 0,
    end: false,
    disabled: true,
    question: QuestionsList.question,
    positiveAnswers: [],
  };

  downloadQuestion = () => {
    const { currIndex } = this.state;
    const questionListIndex = QuestionsList[currIndex];
    return {
      question: questionListIndex.question,
      options: questionListIndex.options,
      answer: questionListIndex.answer,
    };
  };

  quizView = () => {
    this.setState(() => {
      return this.downloadQuestion();
    });
  };

  nextQuestionHandler = () => {
    const { userAnswer, answer, score, positiveAnswers, question } = this.state;

    if (userAnswer === answer) {
      this.setState({
        score: score + 1,
        positiveAnswers: positiveAnswers.concat(question),
        userAnswer: null,
      });
    }

    this.setState({
      currIndex: this.state.currIndex + 1,
      userAnswer: null,
    });
  };

  prevQuestionHandler = () => {
    const { userAnswer, answer, score, positiveAnswers } = this.state;

    if (userAnswer === answer) {
      this.setState({
        score: score - 1,
      });
    }

    this.setState({
      score: score - 1,
      positiveAnswers: positiveAnswers.slice(0, -1),
      currIndex: this.state.currIndex - 1,
    });
  };

  finishBtnHandler = () => {
    const { score, positiveAnswers, userAnswer, answer, question } = this.state;
    if (
      this.state.currIndex === QuestionsList.length - 1 &&
      userAnswer === answer
    ) {
      this.setState({
        score: score + 1,
        positiveAnswers: positiveAnswers.concat(question),
        end: true,
      });
    } else if (this.state.currIndex === QuestionsList.length - 1) {
      this.setState({
        end: true,
      });
    }
  };

  componentDidMount() {
    this.quizView();
  }

  checkAnswer = (answer) => {
    this.setState({
      userAnswer: answer,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currIndex !== prevState.currIndex) {
      this.setState(() => {
        return this.downloadQuestion();
      });
    }
  }

  render() {
    const {
      question,
      options,
      currIndex,
      userAnswer,
      end,
      positiveAnswers,
    } = this.state;

    if (end) {
      return (
        <>
          <Nav />
          <div className="Quiz-end">
            <h3>
              You answered yes to {this.state.score} of {QuestionsList.length}{" "}
              questions
            </h3>
            <h2>
              {this.state.score > 3 ? (
                <p style={{ color: "#FF000C" }}>
                  You answered yes to more than half of the questions you should
                  contact to your doctor
                </p>
              ) : (
                <p>
                  There is no reason to worry, but if you feel unwell go to your
                  doctor
                </p>
              )}
            </h2>
            <span>All the questions you answered yes:</span>
            <ul>
              {positiveAnswers.map((item) => (
                <li className="options">{item}</li>
              ))}
            </ul>
            <form>
              <button class="btnStart" onClick={() => history.push("/")}>
                Exit
              </button>
            </form>
          </div>
        </>
      );
    }

    return (
      <>
        <Nav />
        <div className="wrap">
          <div className="Quiz">
            <h2>{question}</h2>
            <span>{`Question ${currIndex + 1} of ${
              QuestionsList.length
            }`}</span>
            {options.map((option) => (
              <p
                key={option.id}
                className={`options ${
                  userAnswer === option ? "selected" : null
                }`}
                onClick={() => this.checkAnswer(option)}
              >
                {option}
              </p>
            ))}
            <div className="btnFlex">
              {currIndex >= 1 && currIndex <= QuestionsList.length - 1 && (
                <button onClick={this.prevQuestionHandler}>Prev</button>
              )}

              {currIndex < QuestionsList.length - 1 && (
                <button onClick={this.nextQuestionHandler}>Next</button>
              )}

              {currIndex === QuestionsList.length - 1 && (
                <button onClick={this.finishBtnHandler}>Finish</button>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Quiz;
