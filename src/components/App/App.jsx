import { Component } from 'react';
import css from './App.module.css';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import AdditionalStatistics from './AdditionalStatistics';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  stateObject = () => {
    const arrayKeyValue = Object.entries(this.state);
    return arrayKeyValue.map(element => ({
      name: element[0],
      value: element[1],
    }));
  };

  handleClickButton = e => {
    const textButton = e.target.textContent;
    switch (textButton) {
      case 'good':
        this.setState(prevState => ({ good: prevState.good + 1 }));
        break;

      case 'neutral':
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
        break;

      case 'bad':
        this.setState(prevState => ({ bad: prevState.bad + 1 }));
        break;

      default:
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const goodFeedback = this.state.good;
    let result = 0;

    if (totalFeedback > 0) {
      result = Math.ceil((goodFeedback / totalFeedback) * 100);
    }

    return `${result}%`;
  };

  render() {
    return (
      <div className={css.container}>
        <div className={css.wrapper}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              stateObject={this.stateObject}
              handleClickButton={this.handleClickButton}
            />
          </Section>

          {this.countTotalFeedback() > 0 ? (
            <>
              {' '}
              <Section title="Statistics">
                <Statistics stateObject={this.stateObject} />
              </Section>
              <Section title="Additional statistics">
                <AdditionalStatistics
                  countTotalFeedback={this.countTotalFeedback}
                  countPositiveFeedbackPercentage={
                    this.countPositiveFeedbackPercentage
                  }
                />
              </Section>
            </>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </div>
      </div>
    );
  }
}

export default App;

