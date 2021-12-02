import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import {Card, Container, PostImg, PostText, PostTime, UserImg, UserInfo, UserInfoText, UserName} from '../styles/FeedStyles'

const HomeScreen = () => {
  const {user, logout} = useContext(AuthContext);
  return (
    <Container>
      <Card>
        <UserInfo>
          <UserImg source={require('../assets/users/user-1.jpg')} />
          <UserInfoText>
            <UserName>Harshana Weerasingha</UserName>
            <PostTime>4 hours ago</PostTime>
          </UserInfoText>
        </UserInfo>
        <PostText>Heloo this is a test</PostText>
        <PostImg source={require('../assets/users/user-1.jpg')} />
      </Card>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: '#333333',
  },
});
