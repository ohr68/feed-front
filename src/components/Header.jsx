import styles from '../modules/Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do ignite" />
            <strong>Ignite Feed</strong>
        </header>
    );
}