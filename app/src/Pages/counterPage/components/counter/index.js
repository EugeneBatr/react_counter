import { Link } from 'react-router-dom'
import { ROUTES } from '../../../../routes/routeNames'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'

const Counter = ({ countValue, handleIncrement, handleDecrement, handleReset, isParity }) => {
        return (
                <div>
                        <Link to={ROUTES.HOME}>
                                <button>
                                        home
                                </button>
                        </Link>
                        <div className={styles.counterContainer}
                                style={{ backgroundColor: isParity ? 'beige' : 'white'}}>
                                <div className={styles.display}>
                                        <div className={styles.displayElement}>{countValue}</div>
                                        <div className={styles.displayElement}>{isParity ? 'четное' : 'нечетное'}</div>
                        </div>
                                <div className={styles.controlPanel}>
                                        <button className={styles.buttons} onClick={handleIncrement}>+</button>
                                        <button className={styles.buttons} onClick={handleDecrement}>-</button>
                                        <button className={styles.buttons} onClick={handleReset}>Reset</button>
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