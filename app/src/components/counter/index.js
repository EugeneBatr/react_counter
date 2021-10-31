
import styles from './styles.module.scss'
import PropTypes from 'prop-types'


const Counter = ({ countValue, handleIncrement, handleDecrement, handleResetCounter, handleRemove}) => {
        const isEven = countValue % 2 === 0;
        return (
                <div>
                        <div className={styles.counterContainer}
                                style={{ backgroundColor: isEven ? 'beige' : 'white'}}>
                                <div className={styles.display}>
                                        <div className={styles.displayElement}>{countValue}</div>
                                        <div className={styles.displayElement}>{isEven ? 'Even' : 'Odd'}</div>
                        </div>
                                <div className={styles.controlPanel}>
                                        <button className={styles.buttons} onClick={handleIncrement}>+</button>
                                        <button className={styles.buttons} onClick={handleDecrement}>-</button>
                                        <button className={styles.buttons} onClick={handleResetCounter}>Reset</button>
                                        <button className={styles.buttons} onClick={handleRemove}>Remove</button>
                                </div>
                        </div>
                </div>
                
        )
}



Counter.propTypes = {
        isParity: PropTypes.string,
        countValue: PropTypes.number,
        handleIncrement:  PropTypes.func,
        handleReset: PropTypes.func,
        handleDecrement: PropTypes.func,
};

export default Counter