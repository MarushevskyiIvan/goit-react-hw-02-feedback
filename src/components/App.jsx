import { Component } from 'react';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Statistics } from './statistics/Statistics';
import { Section } from './section/Section';
import { Notification } from './notification/Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = evt => {
    const { name } = evt.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1, visibleStatistics: true };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((this.state.good / total) * 100);
  };

  render() {
    const { good, neutral, bad, visibleStatistics } = this.state;

    return (
      <div>
        <Section title="please leave the feedback" />
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          addFeedback={this.addFeedback}
        />
        <Section />

        <Section title="statistics" />
        {!visibleStatistics ? (
          <Notification message={'there is no feedback'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        )}
        <Section />
      </div>
    );
  }
}

export const App = () => {
  return (
    <>
      <Feedback />
    </>
  );
};
