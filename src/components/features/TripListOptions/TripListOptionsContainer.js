import { connect } from 'react-redux';
import TripListOptions from './TripListOptions';
import { getAllTags } from '../../../redux/tagsRedux';
import { setOrderOption } from '../../../redux/orderRedux';
import { getAllFilters, changeSearchPhrase, changeDuration, addingTag, removeTag } from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  addingTag: tags => dispatch(addingTag(tags)),
  removeTag: tags => dispatch(removeTag(tags)),
  setOrderOption: setOrderOpt =>(setOrderOption(setOrderOpt)),
  changeDuration: (type, value) => dispatch(changeDuration({
    type,
    value,
  })),

  // TODO - add more dispatchers for other filters
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
