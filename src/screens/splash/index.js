import React, { useEffect } from 'react';
import Styles from './styles'

const Splash = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => navigation.navigate('Home'), 5000)
  })

  return (
    <Styles.Container>
      <Styles.StatusBar />
      <Styles.Logo name='css3' />
      <Styles.Title>
        {'Styled \n Components'}
      </Styles.Title>
    </Styles.Container>
  );
}

export default Splash;