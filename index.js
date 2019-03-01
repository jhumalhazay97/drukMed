/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, {Component} from 'react'
import {AppRegistry} from 'react-native'
import App from './App';
import {name as appName} from './app.json';
import Splash from './components/Splash'
import Slider from './components/Slider'
class Main extends Component{
    constructor(props){
        super(props);
        this.state = {currentScreen: 'Splash'};
        console.log('Do Some Task after 3 sec')
        setTimeout(()=>{
            console.log('Done Some Task after 3 sec')
            this.setState({currentScreen: 'Slider'})
        },3000)
    }
    render(){
        const {currentScreen}= this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash/> : <Slider/>
        return mainScreen
    }
}
AppRegistry.registerComponent(appName, () => Main);
