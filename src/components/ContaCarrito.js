import { useState } from "react"
import styles from '../components'

export const Counter = ({ stock, handleQuantity}) => {
    const [counter, setCounter] = useState(0)

    const greaterThanZero = () => {
    }
    const decrease =() => {
    }

    return (
        <div className={styles.container}>
            <div className={styles.counter}>
                <p>{counter}</p>

                <button
                    className={`${styles.less} ${styles.btn}`}
                    onClick={decrease}
                >
                -
                </button>

                <button
                    className={`${styles.plus} ${styles.btn}`}
                    onClick={() => setCounter (counter + 1)}
                    disabled={counter===stock}
                >
                +
                </button>

                <button
                    className={`${styles.add} ${styles.btn}`}
                    onClick={() => {
                        if (counter !==0) handleQuantity (counter) 
                        }}>
                        add to cart
                    </button>
            </div>
        </div>   
        )
}