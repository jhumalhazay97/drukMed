/*This is an example of React Native App Intro Slider */
import React from 'react';
//import react in project 
import { StyleSheet, View, Text, StatusBar } from 'react-native';
//import all the required component
import AppIntroSlider from 'react-native-app-intro-slider';
//import AppIntroSlider to use it
import LinearGradient from 'react-native-linear-gradient'
//import LinearGradient
export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      //To show the main page of the app
    };
  }
  _onDone = () => {
    // After user finished the intro slides. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };
  _onSkip = () => {
    // After user skip the intro slides. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };
  render() {
    //If false show the Intro Slides
    if (this.state.showRealApp) {
      //Real Application
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 50,
          }}>
          <StatusBar backgroundColor='#1C1328'></StatusBar>
          <Text>
            This will be your screen when you click Skip from any slide or Done
            button at last
          </Text>
        </View>
      );
    } else {
      //Intro slides
      return (
        
        <AppIntroSlider
          slides={slides}
          //comming from the JsonArray below
          onDone={this._onDone}
          //Handler for the done On last slide
          showSkipButton={true}
          onSkip={this._onSkip}
        />
      );
    }
  }
}
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: 16,
  },
});
 
const slides = [
  {
    key: 's1',
    text: 'Search For The Medicine',
    title: 'Find Medicine',
    titleStyle: styles.title,
    textStyle: styles.text,
    image:require('../images/searchdrug1.png'),
    imageStyle: styles.image,
    backgroundColor: '#2D2242',
    
  },
  {
    key: 's2',
    title: 'Know Dosage',
    titleStyle: styles.title,
    text: 'Get Accurate Dosage Of Medicine',
    textStyle: styles.text,
    image:require('../images/dosage.png') ,
    image:require('../images/dosage.png') ,
    imageStyle: styles.image,
    backgroundColor: '#261938',
    
  },
  {
    key: 's3',
    title: 'Save Favourites',
    titleStyle: styles.title,
    text: 'List All The Medicine Of Your Choice',
    textStyle: styles.text,
    image:require('../images/fav.png') ,
    imageStyle: styles.image,
    backgroundColor: '#1C1328',
  },

];