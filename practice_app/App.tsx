import { View, Text, Image, Button, TouchableOpacity, Pressable, SafeAreaView } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView>
      <Text>Hello</Text>

      <Image 
      source={{uri: 'https://images.unsplash.com/photo-1733468221794-dd3344c6015e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
      style={{width: 200, height: 200}}
      /> // Image component is used to display images in react native
      
      <Button title='Press Me' /> // Button component is used to create buttons in react native

      <TouchableOpacity
      style={{backgroundColor: 'green', padding: 10}} // TouchableOpacity component is used to create touchable components in react native
      >
        <Text>Press Me</Text> // Text component is used to display text in react native
      </TouchableOpacity>

      <Pressable style={{backgroundColor: 'yellow', padding: 10}} >// Pressable component is used to create touchable components in react native
        <Text>Press Me</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default App