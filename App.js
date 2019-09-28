import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/home';
import UsersScreen from './src/users';
import LogoTitle from './src/logo';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers  from './src/reducers';
const AppNavigator=createStackNavigator({
    Home:{
        screen:HomeScreen,
        navigationOptions:({navigation})=>({

            headerTitle:<LogoTitle style={{flex:1,textAlign:'center'}}/>,
            headerTitleStyle:{

            }
        })
    },
    Users:{
        screen:UsersScreen
    }
},{
     initialRouteName:'Home',
    defaultNavigationOptions:{
       title:'Navigation',
         headerStyle:{
             backgroundColor:'black'
         },
        headerTitleStyle:{
             color:'white',
            flex:1,
            textAlign:'center'
        }
    },
    mode:'modal',
    headerMode:'float',

})
let Navigation=createAppContainer(AppNavigator);
const createStoreWithMiddleware=applyMiddleware(promiseMiddleware)(createStore);

class App extends Component{

    render(){
        return (
        <Provider store={createStoreWithMiddleware(reducers)}>
        <Navigation/>
        </Provider>
        )
    }
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
