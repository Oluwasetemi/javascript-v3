import PropTypes from 'prop-types';

export function List({ item }) {

  return <li>Learn {item}</li>;
}

List.propTypes = {
  item: PropTypes.string.isRequired,
};
