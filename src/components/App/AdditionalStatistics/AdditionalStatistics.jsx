import PropTypes from 'prop-types';
import css from './AdditionalStatistics.module.css';
import bgChangeFromPercentage from '../../../utilities/bgChangeFromPercentage';

function AdditionalStatistics({
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <ul
      className={bgChangeFromPercentage(countPositiveFeedbackPercentage(), css)}
    >
      <li className={css.item}>
        <p>
          Total feedback:{' '}
          <span className={css.value}>{countTotalFeedback()}</span>
        </p>
      </li>
      <li className={css.item}>
        <p>
          Positive feedback:{' '}
          <span className={css.value}>{countPositiveFeedbackPercentage()}</span>
        </p>
      </li>
    </ul>
  );
}

AdditionalStatistics.prototype = {
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};

export default AdditionalStatistics;
