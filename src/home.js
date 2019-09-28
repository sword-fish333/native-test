import React,{Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {connect} from 'react-redux';
import {getArticles} from './actions';
class HomeScreen extends  Component{
  static navigationOptions=({navigation})=>{
      return {
          headerLeft:(
              <Button onPress={()=>navigation.navigate('Users')} title='B'/>
          ),
          headerRight:(
              <Button onPress={()=>navigation.navigate('Users')} title='A'/>
          )
      }
  }

  componentDidMount(){
      this.props.dispatch(getArticles());
  }
    render(){
        return(
            <View style={styles.container}>
                <Text>Home screen </Text>
                    <Button onPress={()=>this.props.navigation.navigate('Users',{
                        // userId:22,
                        userName:'Dan',
                        userLastName:'Bogdan'
                    })} title="Go to users" />

                <Text>{this.props.navigation.getParam('message','N/A')}</Text>
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


mapStateToProps=(state)=>{
    console.log(state);
    return {
        articles:state.articles
    }
}
export default connect(mapStateToProps)(HomeScreen);