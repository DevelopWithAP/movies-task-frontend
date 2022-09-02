import React from 'react'
import styles from './Navigation.module.css';


type NavProps = {
    children: React.ReactNode;
};

const Navigation = ({children}: NavProps): JSX.Element => {
  return (
    <header className={styles.navigation}>    
        {children}
    </header>
  )
}

export default Navigation;
