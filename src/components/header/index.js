import React from 'react';
import Styles from './styles';

const Header = () => {
    return (
        <Styles.Container>
            <Styles.Icon />
            <Styles.Title>Styled Components</Styles.Title>
            <Styles.Icon name='css3' />
        </Styles.Container>
    );
}

export default Header;