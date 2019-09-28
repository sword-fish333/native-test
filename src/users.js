import React,{Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';


class UsersScreen extends  Component{
    static navigationOptions={
        title:'Users',
        headerStyle:{
            backgroundColor:'#f4511e',
        },
        headerTintColor:'white',
        headerTitleStyle:{
            fontWeight:'bold',
            color:'black'
        }
    }

    render(){
        // console.warn('props',this.props);
        const userId=this.props.navigation.getParam('userId','N/A');
        const userName=this.props.navigation.getParam('userName');
        const userLastName=this.props.navigation.getParam('userLastName','N/A');
        return(
            <View style={styles.container}>
                <Text>Users screen </Text>
                <Text>User id:{userId}  </Text>
                <Text>User Name: {userName} </Text>
                <Text>User Last Name:{userLastName}</Text>

                <Button onPress={()=>this.props.navigation.navigate('Home',{
                    message:'Hello man'
                })} title="Go to home" />
                <View style={{marginTop:20}}>
                <Button onPress={()=>this.props.navigation.goBack()} title="Go back" />
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default UsersScreen;
