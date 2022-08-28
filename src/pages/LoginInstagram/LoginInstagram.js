import { SafeAreaView, Text, TextInput, StyleSheet, Image, View, TouchableOpacity, StatusBar } from "react-native"
import { LinearGradient } from 'expo-linear-gradient'
import instagram from "./instagramLogo.png"
import facebookLogo from "./facebookLogo.png"
import {useState} from "react"

export default function LoginInstagram() {

  const [user, userName] = useState("")
  const [pass, passWord] = useState("")
  


  

  return (
    <SafeAreaView style={styles.container}>

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

        <Image source={instagram} style={styles.image} />

        <View style={styles.input}>
          <TextInput
            style={styles.inputText}
            placeholder="Digite seu nome de usuário"
            placeholderTextColor={"rgba(255,255,255,0.2)"}
            selectionColor="#fff"
            keyboardType="email-address" 
            onChangeText = {userName}/>
        </View>

        <View style={styles.input}>
          <TextInput
            style={styles.inputText}
            placeholder="Digite sua senha"
            placeholderTextColor={"rgba(255,255,255,0.2)"}
            selectionColor="#fff"
            secureTextEntry
            onChangeText = {passWord} />
        </View>

        <TouchableOpacity style={styles.button} onPress={()=>alert(user +" " + pass)}>
          <Text style={styles.buttonText}  >Entrar</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.loginForgot}>
          <Text style={styles.loginForgotText}>Esqueceu seus dados? Obtenha ajuda para entrar.</Text>
        </TouchableOpacity>

        <View style ={styles.or}>
          <View style={styles.line}></View>
          <Text style={styles.orText}>OU</Text>
          <View style = {styles.line}></View>
        </View>

        <View style ={styles.or}>
        <Image style = {styles.facebookLogo} source = {facebookLogo}/>
        <Text style={styles.orText}>Entrar com o facebook</Text>

        </View>


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
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 20,
    padding: 10,

  },

  inputText: {
    color: "#fff",
    fontSize: 20,
    fontStyleLine: "none",


  },

  image: {
    width: "55%",
    height: 55,
    tintColor: "#fff",
    marginBottom: 30,
  },

  button: {
    width: "80%",
    height: 50,
    borderColor: "rgba(255,255,255,0.5)",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,



  },

  buttonText: {
    color: "#fff",
    fontSize: 18,

  },

  loginForgot: {

    width: "80%",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",


  },
  loginForgotText: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 16,
    textAlign: "center"
  },

  or: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,

  },
  
  line:{
   
    width:"30%",
    margin: 5,
    height: 1,
    backgroundColor: "rgba(255,255,255,0.7)"
      
    },

  orText: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 18,
    textAlign: "center"
  },
  facebookLogo: {
    width: 40,
    height:40,
    tintColor: "#fff"
  }



})
