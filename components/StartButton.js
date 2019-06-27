import React from 'react';
import {View, Button} from 'react-native'

const StartButton = props => {
  return (
    <Button title='START' onPress={props.gameStart}/>
  )
}

export default StartButton;