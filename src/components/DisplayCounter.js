import { connect } from 'react-redux';

function DisplayCounter(props) {
    return (
        <>
            <h2>DisplayCounter</h2>
            {/* <h4>0</h4> */}
            <h4>{props.ctr}</h4>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        ctr: state.count
    }
}

export default connect(mapStateToProps)(DisplayCounter)