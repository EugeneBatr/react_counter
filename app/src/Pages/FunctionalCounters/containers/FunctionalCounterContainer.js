import {useState} from 'react'
import FunctionalContainerLayout from '../components/Layout'

const FunctionalCounterContainer = () => {
        const [countValue, setCountValue] =  useState(0);

        const handleIncrement = () => {
                setCountValue(countValue + 1)
        }

        const handleDecrement = () => {
                if (countValue > 0) {
                        setCountValue(countValue - 1)
                }
        }

        const handleReset = () => {
                setCountValue(0)
        }
        
        

        return <FunctionalContainerLayout 
        countValue={countValue}
        handleIncrement={handleIncrement} 
        handleDecrement={handleDecrement}
        handleReset={handleReset}
        />;
}

export default FunctionalCounterContainer