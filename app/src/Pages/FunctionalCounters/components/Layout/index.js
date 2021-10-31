

import React from 'react'
import Counter from '../../../../components/counter'

const FunctionalContainerLayout = ({countValue, handleIncrement, handleDecrement, handleReset}) => {
        return (
                <div>
                        <h1>Functional Counter</h1>
                        <Counter 
                                countValue={countValue}
                                handleIncrement={handleIncrement} 
                                handleDecrement={handleDecrement}
                                handleReset={handleReset}
                        />
                </div>
        )
}

export default FunctionalContainerLayout


