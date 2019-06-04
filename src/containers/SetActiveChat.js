import { connect } from 'react-redux'
import { setActiveChat } from '../actions'
import ChatCard from '../components/ChatCard'

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setActiveChat(ownProps.id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatCard)
