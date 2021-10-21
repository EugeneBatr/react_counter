import {Component} from 'react';
import Counter from '../../../../components/counter';
import { PARITY_TYPES } from "../../../constants";



class CounterPageContainer extends Component {

        constructor(props) {
                super(props);
                        this.state = {
                                countValue: 0,
                                parityType: PARITY_TYPES.EVEN,
                        }
        }

        componentDidUpdate(prevProps, prevState) {
                if (prevState.countValue !== this.state.countValue) {
                        const recalculatedParityType = 
                        this.state.countValue % 2 === 0 ? PARITY_TYPES.EVEN : PARITY_TYPES.ODD;

                        this.setState({...this.state, parityType: recalculatedParityType})
                }
                
        }

        handleIncrement = () => {
                this.setState({ ...this.state, countValue: this.state.countValue  + 1 })
        }

        handleDecrement = () => {
                if(this.state.countValue > 0) {
                this.setState({ ...this.state, countValue: this.state.countValue  - 1 })
                }
        }

        handleReset = () => {
                this.setState({ 
                        ...this.state,
                        countValue: 0,
                 })
        }
        

        render() {
                return (
                <Counter
                        countValue = { this.state.countValue }
                        parityType = { this.state.parityType}
                        handleIncrement = { this.handleIncrement }
                        handleDecrement = { this.handleDecrement }
                        handleReset = {  this.handleReset }
                />
                )
        }
}


export default CounterPageContainer