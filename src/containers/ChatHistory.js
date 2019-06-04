import { connect } from 'react-redux'
import History from '../components/History'

const mapStateToProps = (state) => state;

export default connect(
  mapStateToProps
)(History)
