import React,{useState, useCallback} from 'react'
import Counter from '../../../components/counter';
import FunctionalContainerLayout from '../../FunctionalCounters/components/Layout';
import FunctionalCounterContainer from '../../FunctionalCounters/containers/FunctionalCounterContainer'
import CounterOfCountersLayout from '../components'


const CounterOfCountersContainer = () => {

        const [countersList, setCountersList] =  useState([]);  


        const handleAdd = useCallback(() => {
                        const newCounter = {
                                countValue: 0,
                        };

                        setCountersList(state => {
                                const updateCounters = state.map(({countValue}) => ({
                                        countValue: countValue % 2 === 0 ? countValue + 1 : countValue
                                }));

                                return [...updateCounters, newCounter]
                        })
                },[countersList])

                
        const handleRemove = useCallback((index) => {
                setCountersList(state => {
                        const copy = [...state]

                        copy.splice(index, 1)

                        return copy.map(({countValue}) => ({
                                countValue: countValue % 2 !== 0 ? countValue - 1  : countValue
                        }));
                })
        })


        const handleReset = () => {
                setCountersList([])
        }


        const handleIncrement  = useCallback((counterIndex) => {
                setCountersList(state => {
                        return state.map((counter,index) => ({
                                countValue:
                                counterIndex === index ? counter.countValue + 1 : counter.countValue,
                        }));
                })
        },[])

        const handleDecrement  = useCallback((counterIndex) => {
                if(countersList[counterIndex].countValue > 0) {
                setCountersList(state => {
                        return state.map((counter,index) => ({
                                countValue:
                                counterIndex === index ? counter.countValue - 1 : counter.countValue,
                        }));
                })}
        },[countersList])

        const handleResetCounter  = useCallback((counterIndex) => {
                setCountersList(state => {
                        return state.map((counter,index) => ({
                                countValue:
                                counterIndex === index ? 0 : counter.countValue,
                        }));
                })
        },[])

        return <CounterOfCountersLayout

                        countersList={countersList}
                        handleAdd={ handleAdd}
                        handleRemove={handleRemove}
                        handleReset={handleReset}
                        handleIncrement={handleIncrement}
                        handleDecrement={handleDecrement}
                        handleResetCounter={handleResetCounter}
                />;
                
}

export default CounterOfCountersContainer
