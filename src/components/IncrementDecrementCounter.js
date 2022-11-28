import { connect } from 'react-redux';

function IncrementDecrementCounter(props) {

    const handleIncrement = () => {
        props.onIncrement()
    }

    const handleDecrement = () => {
        props.onDecrement()
    }

    return (
        <>
            <h2>IncrementDecrementCounter</h2>

            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: 'INCREMENT'}),
        onDecrement: () => dispatch({type: 'DECREMENT'})
    }
}

export default connect(null, mapDispatchToProps)(IncrementDecrementCounter)