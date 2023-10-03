import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { Component, useState } from 'react';

import React from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClick = evt => {
    if (evt === 'Good') {
      setGood(good + 1);
    } else if (evt === 'Neutral') {
      setNeutral(neutral + 1);
    } else if (evt === 'Bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100 || 0);
  };

  return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={onClick}
        ></FeedbackOptions>
      </Section>

      <Section>
        {!countTotalFeedback != 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            title="Statistics"
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        )}
      </Section>
    </>
  );
};

export default App;

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   onClick = key => {
//     this.setState(prevState => {
//       return {
//         [key]: prevState[key] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((acc, option) => acc + option, 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100 || 0);
//   };

//   render() {
//     const good = this.state.good;
//     const neutral = this.state.neutral;
//     const bad = this.state.bad;
//     const totalFeedback = this.countTotalFeedback();
//     const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage(
//       totalFeedback,
//       good
//     );
//     return (
//       <>
//         <Section title="Please leave your feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onClick}
//           ></FeedbackOptions>
//         </Section>

//         <Section>
//           {!totalFeedback ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               title="Statistics"
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={totalFeedback}
//               positiveFeedbackPercentage={positiveFeedbackPercentage}
//             ></Statistics>
//           )}
//         </Section>
//       </>
//     );
//   }
// }

// export default App;
