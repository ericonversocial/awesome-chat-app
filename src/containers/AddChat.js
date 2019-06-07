import { connect } from 'react-redux'
import { addChat } from '../actions'
import Header from '../components/Header'


const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(addChat())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
