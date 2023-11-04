import { Component } from 'react';

class Button extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGoodFeedback = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  addNeutralFeedback = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  addBadFeedback = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  render() {
    return (
      <div>
        <h1>please leave the feedback</h1>
        <button onClick={this.addGoodFeedback}>good: {this.state.good}</button>
        <button onClick={this.addNeutralFeedback}>
          neutral: {this.state.neutral}
        </button>
        <button onClick={this.addBadFeedback}>bad: {this.state.bad}</button>
        <h2>statistics</h2>
        <p>good :{this.state.good}</p>
        <p>neutral:{this.state.neutral}</p>
        <p>bad:{this.state.bad}</p>
      </div>
    );
  }
}

export const App = () => {
  return (
    <>
      <Button />
    </>
  );
};
