import {SafeAreaView, Text, TextInput, StyleSheet} from "react-native"
import { LinearGradient } from 'expo-linear-gradient'

export default function LoginInstagram () {
    
    return (
        <SafeAreaView style = {styles.container}>
         
          <LinearGradient 
      colors={['#45A9BF', '#A66388']} 
      start={{
        x: 0,
        y: 0
      }}
      end={{
        x: 1,
        y: 1
      }}
      style={styles.box}>

      <TextInput style = {styles.input}/>

      </LinearGradient>
    
       
        </SafeAreaView>

    )
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,  
    },
    
    box: {
      width: '100%',
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },

    input: {
      width: "80%",
      height: 50,
      backgroundColor: "#fff",
      opacity: 0.2,
    }
  })
  