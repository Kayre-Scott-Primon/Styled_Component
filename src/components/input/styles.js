import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons'

export default Styles = {

    InputName: styled.Text`
        font-size: 13px;
        color: #999;
        align-self: flex-start;
        margin: 5px 2px 2px 25px;
    `,

    ContainerInput: styled.View`
        flex-direction: row;
    `,

    Input: styled.TextInput`
        width: 100%;
        flex: 1;
        height: 35px;
        border-bottom-width: 1px;
        margin-left: 25px;
        border-color: #ddd;
    `,

    IconChange: styled(Icon)`
        font-size: 20px;
        color: #0008;
        margin: 0px 10px 0px 10px;
    `,
}
