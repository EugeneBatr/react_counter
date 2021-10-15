import Counter from "../counter";
import {Component} from 'react';



class CounterPageContainer extends Component {
        state = {
                countValue: 0,
                isParity: 'even',
        }
        handleIncrement = () => {
                this.setState({ countValue: this.state.countValue  + 1 })
        }
        handleDecrement = () => {
                this.setState({ countValue: this.state.countValue  - 1 })
        }
        handleReset = () => {
                this.setState({ countValue:  this.state.countValue = 0,
                                isParity: this.state.isParity = true })
        }
        componentDidUpdate(prevProps, prevState) {
                prevState.countValue % 2 === 0 ? this.state.isParity = true : this.state.isParity = false
                
        }

        render() {
                return (
                <Counter
                        countValue = { this.state.countValue }
                        isParity = { this.state.isParity}
                        handleIncrement = { this.handleIncrement }
                        handleDecrement = { this.handleDecrement }
                        handleReset = { this.handleReset }
                />
                )
        }
}


export default CounterPageContainer