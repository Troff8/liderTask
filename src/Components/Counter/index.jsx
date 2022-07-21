import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
const Counter = ({ count }) => {
    return (
        <div className={styles.counter}>
            <div className={styles.actionCounter}>-</div>
            <div className={styles.count}>{count}</div>
            <div className={styles.actionCounter}>+</div>
        </div>
    )
}
Counter.propTypes = {
    count: PropTypes.number
}

export default Counter
