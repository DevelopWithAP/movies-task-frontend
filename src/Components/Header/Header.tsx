import React from 'react';
import styles from './Header.module.css';

type HeaderProps = {
    children: React.ReactNode;
};

const Header = ({ children }: HeaderProps): JSX.Element => {
    return (
        <header className={styles.header}>
            {children}
        </header>
    );
}

export default Header;