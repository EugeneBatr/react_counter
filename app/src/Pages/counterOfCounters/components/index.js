import {useMemo} from 'react'
import Counter from '../../../components/counter'


const CounterOfCountersLayout = ({handleAdd,handleRemove,handleReset,countersList,handleIncrement,handleDecrement,handleResetCounter}) => {
        const totalSum = useMemo(() => {
                return countersList.reduce((result,{countValue}) => result + countValue, 0)
        },[countersList])
        return (
                <div>
                        <div>
                                <button onClick={handleAdd}>Add Counter</button>
                                <button onClick={handleReset}>Reset</button>
                        </div>
                        <h1>TOTAL SUM: {totalSum}</h1>
                        <h1>TOTAL LIST: {countersList.length}</h1>
                        <div>
                                {countersList.map((counter, index) => (
                                        <Counter 
                                        countValue={counter.countValue} 
                                        handleRemove={() =>handleRemove(index)}
                                        handleIncrement={() =>handleIncrement(index)}
                                        handleDecrement={() => handleDecrement(index)}
                                        handleResetCounter={() => handleResetCounter(index)}
                                        />
                                ))}
                        </div>
                </div>
        )
}

export default CounterOfCountersLayout


