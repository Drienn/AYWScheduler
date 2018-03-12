import React, { Component } from 'react'
import { View, ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { Button } from 'native-base'
import { connect } from 'react-redux'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/IndividualScreenStyle'

const calendarTheme= {
    backgroundColor: '#ffffff',
    calendarBackground: '#ffffff',
    textSectionTitleColor: '#b6c1cd',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#00adf5',
    dayTextColor: '#2d4150',
    textDisabledColor: '#d9e1e8',
    dotColor: '#00adf5',
    selectedDotColor: '#ffffff',
    arrowColor: 'orange',
    monthTextColor: 'blue',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
  }

class IndividualScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        '2018-03-11': [
          {name: "Item for 2018-03-11", height: 66},
          {name: "Item for 2018-03-11", height: 50},
          {name: "Item for 2018-03-11", height: 115}
        ]
      }
    }
  }

  onGoBack(state){
    if (!state) return undefined
    let { date } = state
    let newItems = {...this.state, [date]: [
      {name: state.name, height: 60}
    ]}
    return newItems
  }

  componentDidMount() {
    console.log('individual screen mounted')
    let newItems = this.onGoBack() || undefined
    console.log(newItems)
    if (newItems !== undefined) this.setState({items: newItems})

  }

  render() {
    console.log('the state', this.props.navigation.state.params)
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={'2018-03-11'}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        onDayPress={(day) => {console.log('selected day', day)}}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#666'},
        //    '2017-05-09': {textColor: '#666'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
         // monthFormat={'yyyy'}
         // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          // for (let j = 0; j < numItems; j++) {
          //   this.state.items[strTime].push({
          //     name: 'Item for ' + strTime,
          //     height: Math.max(50, Math.floor(Math.random() * 150))
          //   });
          // }
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    // console.log('render item', item)
    return (
      <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate(e) {
    let itemDate = this.timeToString(e)
    let { navigate } = this.props.navigation
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
        <Button
          onPress={() => navigate('addEvent', {itemDate, onGoBack: this.onGoBack} )}
          success
          style={styles.addEvent}>
          <Text>Add Event</Text>
        </Button>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndividualScreen)
