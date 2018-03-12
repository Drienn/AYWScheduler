import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  addButton: {
    width: '100%',
    // padding: 20,
    alignSelf: 'center',
    alignItems: 'center'
  },
  addText: {
    left: '500%',
    fontSize: 22,
    fontWeight:'bold'
  }
})
