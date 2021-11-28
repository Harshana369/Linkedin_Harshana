import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import FormButton from '../components/FormButton';
import { AuthContext } from './AuthProvider.android';

const AppStack = () => {

    const {logout} = useContext(AuthContext);

    return (
      <View>
        <Text>Home</Text>

        <FormButton buttonTitle="Logout" onPress={() => logout()} />
      </View>
    );
}

export default AppStack
