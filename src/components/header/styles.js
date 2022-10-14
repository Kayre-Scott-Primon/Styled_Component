import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome'

export default Styles = {
    Container: styled.View`
        width: 100%;
        height: 40px;
        background-color: #913;
        justify-content: space-around;
        align-content: center;
        flex-direction: row;
    `,

    Title: styled.Text`
        font-size: 23px;
        color: #fff;
        font-weight: 700;
    `,

    Icon: styled(Icon)`
        font-size: 25px;
        color: #fff;
    `,

}