import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ filter, changeFilterInput  }) => {
  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
       placeholder='Enter a name'
        className={css.filterInput}
        type="text"
        name={filter}
        onChange={changeFilterInput}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilterInput: PropTypes.func.isRequired,
};

export default Filter;