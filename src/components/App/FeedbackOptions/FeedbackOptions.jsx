import PropTypes from 'prop-types';
import {
  BsFillEmojiWinkFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiAngryFill,
} from 'react-icons/bs';
import css from './FeedbackOptions.module.css';

function FeedbackOptions({ stateObject, handleClickButton }) {
  return (
    <ul className={css.list}>
      {stateObject().map(({ name }, index) => {
        return (
          <li className={css.item} key={index}>
            <button
              className={css.button}
              type="button"
              onClick={handleClickButton}
            >
              <span className={css.text}>{name}</span>
              {name === 'good' && <BsFillEmojiWinkFill />}
              {name === 'neutral' && <BsFillEmojiNeutralFill />}
              {name === 'bad' && <BsFillEmojiAngryFill />}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.prototype = {
  stateObject: PropTypes.func.isRequired,
  handleClickButton: PropTypes.func.isRequired,
};

export default FeedbackOptions;
