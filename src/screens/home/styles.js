import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons'

export default Styles = {
    Container: styled.View`
        width: 100%;
        height: 100%;
        background-color: #ddd;
        align-items: center;
    `,

    Card: styled.View`
        background-color: #fff;
        width: 100%;
        height: 175px;
        align-items: center;
    `,

    IconUser: styled(Icon)`
        font-size: 125px;
        color: #ddd;
    `,

    NameUser: styled.Text`
        font-size: 25px;
        color: #000;
        font-weight: 500;
    `,

    Form: styled.View`
        background-color: #fff;
        width: 100%;
        height: 265px;
        align-items: center;
        margin-top: 35px;
    `,

    Logout: styled.View`
        width: 100%;
        height: 45px;
        background-color: #fff;
        margin-top: 35px;
        flex-direction: row;
        align-items: center;
        padding: 0px 15px 0px 15px;
        justify-content: space-between;
    `,

    LogoutLabel: styled.Text`
        font-size: 20px;
        font-weight: 700;
        color: #000;
    `,

    LogoutIcon: styled(Icon)`
        font-size: 20px;
        color: #000;
    `,

}