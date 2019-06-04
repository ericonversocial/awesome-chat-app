import { connect } from 'react-redux'
import { deleteChat, resetActiveChat } from '../actions'
import DeleteButton from '../components/DeleteButton'


const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (id) => {
  	dispatch(resetActiveChat(ownProps.id))
  	dispatch(deleteChat(ownProps.id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteButton)
