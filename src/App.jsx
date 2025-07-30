import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './modules/App.module.css'
import './modules/global.css'

function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>

        </main>
      </div>
    </div>
  )
}

export default App
