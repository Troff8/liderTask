import React from 'react'
import Header from './Header'
import Main from './Main'
import styles from './styles.css'
const App = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.app}>
                <Header />
                <Main />
            </div>
        </div>
    )
}

export default App
