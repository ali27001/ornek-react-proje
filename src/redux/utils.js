import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Use connectTo method to connect redux results to component

export const connectTo = (mapStateToProps, actions, container) => {
    const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)
    return connect(
        mapStateToProps,
        mapDispatchToProps,
    )(container);
};