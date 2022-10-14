
import React from 'react';
import Styles from './styles';

function Input(props) {
    return (
        <>
            <Styles.InputName>{props.title}</Styles.InputName>
            <Styles.ContainerInput>
                <Styles.Input />
                <Styles.IconChange name='ios-create-outline' />
            </Styles.ContainerInput>
        </>
    )
}

export default Input