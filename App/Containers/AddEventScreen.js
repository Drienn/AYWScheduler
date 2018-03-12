import React, { Component } from 'react'
import { ScrollView, Text, TextInput, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Content, Form, Item, Input, Label, Button, Footer } from 'native-base'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AddEventScreenStyle'

class AddEventScreen extends Component {
  constructor(){
    super()

    this.state = {
      date: null,
      name: '',
      details: ''
    }
  }

  goBack(){
    this.props.navigation.state.params.onGoBack(this.state)
    this.props.navigation.goBack()
  }

  componentDidMount() {
    console.log(this.props.navigation.state)
    let { itemDate } = this.props.navigation.state.params
    this.setState({date: itemDate})
  }

  render () {
    console.log('add state', this.state)
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Full Name</Label>
              <Input
                onChangeText={(name) => this.setState({name})}
                value={this.state.name}/>
            </Item>
            {/* <Item floatingLabel>
              <Label>Password</Label>
              <Input />
            </Item> */}
            <Item floatingLabel last style={{paddingBottom: 20}}>
              <Label>Event Details</Label>
              <Input
                onChangeText={(details) => this.setState({details})}
                value={this.state.details}
                multiline = {true}
                numberOfLines = {4} />
            </Item>
          </Form>
        </Content>
        <Footer>
          <Button success style={styles.addButton}
            onPress={() => this.goBack()}>
            <Text style={styles.addText}>Add</Text>
          </Button>
        </Footer>
      </Container>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(AddEventScreen)
