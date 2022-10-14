import React from 'react';
import Header from '../../components/header';
import Input from '../../components/input';
import Styles from './styles';

const Home = () => {
    return (
        <>
            <Header />
            <Styles.Container>
                <Styles.Card>
                    <Styles.IconUser name='person-circle-sharp' />
                    <Styles.NameUser>{'User name'}</Styles.NameUser>
                </Styles.Card>
                <Styles.Form>
                    <Input title={'First Name'} />
                    <Input title={'Last Name'} />
                    <Input title={'Phone Number'} />
                    <Input title={'Email'} />
                </Styles.Form>
                <Styles.Logout>
                    <Styles.LogoutLabel>LogOut</Styles.LogoutLabel>
                    <Styles.LogoutIcon name='exit-outline' />
                </Styles.Logout>
            </Styles.Container>
        </>
    );
}

export default Home;