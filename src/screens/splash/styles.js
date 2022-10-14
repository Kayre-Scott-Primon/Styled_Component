import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome'

export default Styles = {
    Container: styled.View`
        width: 100%;
        height: 100%;
        background-color: #913;
        justify-content: center;
        align-items: center;
    `,

    Title: styled.Text`
        color: #fff;
        font-weight: 500;
        font-size: 25px;
        text-align: center;
    `,

    Logo: styled(Icon)`
        color: #fff;
        font-size: 100px;
        margin: 15px;
    `,

    StatusBar: styled.StatusBar.attrs({
        backgroundColor: '#913'
    })`
    `
}