import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  addEvent: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginTop: 22,
    padding: 5
  }
})
