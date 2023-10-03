import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onClick = key => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, option) => acc + option, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100 || 0);
  };

  render() {
    const good = this.state.good;
    const neutral = this.state.neutral;
    const bad = this.state.bad;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage(
      totalFeedback,
      good
    );
    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onClick}
          ></FeedbackOptions>
        </Section>

        <Section>
          {!totalFeedback ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              title="Statistics"
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positiveFeedbackPercentage={positiveFeedbackPercentage}
            ></Statistics>
          )}
        </Section>
      </>
    );
  }
}

export default App;
