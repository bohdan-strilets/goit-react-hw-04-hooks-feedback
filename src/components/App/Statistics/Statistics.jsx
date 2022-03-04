import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function Statistics({ stateObject }) {
  return (
    <ul>
      {stateObject().map(({ name, value }, index) => {
        return (
          <li className={css.item} key={index}>
            <p className={css.text}>
              {name}: <span className={css.value}>{value}</span>
            </p>
          </li>
        );
      })}
    </ul>
  );
}

Statistics.prototype = {
  stateObject: PropTypes.func.isRequired,
};

export default Statistics;
