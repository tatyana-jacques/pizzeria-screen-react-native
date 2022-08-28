import { SafeAreaView, View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native"
import Buttons from "./Buttons"
import {Print} from "./Calcul"
import { useState } from "react"


export default function Calculator() {



    const [value, setValue] = useState("0")

    const [number, setNumber] = useState("0")
    

    

    function clearResult() {
        setValue("0")
    }

    function generateResult() {
        setNumber()
        console.warn(showDigit.digit)

    }

    function returnDigit (){
        setResult (result.lenght-1)
    }
    
    const buttons = [
        { label: "AC", type: "first" },
        { label: "", type: "third" },
        { label: "%", type: "first" },
        { label: "÷", type: "first" },
        { label: "7", type: "second" },
        { label: "8", type: "second" },
        { label: "9", type: "second" },
        { label: "x", type: "first" },
        { label: "4", type: "second" },
        { label: "5", type: "second" },
        { label: "6", type: "second" },
        { label: "-", type: "first" },
        { label: "1", type: "second" },
        { label: "2", type: "second" },
        { label: "3", type: "second" },
        { label: "+", type: "first" },
        { label: "0", type: "second" },
        { label: ".", type: "second" },
    ]

    return (

       

        <SafeAreaView style={styles.container}>
             <StatusBar backgroundColor = "#808080"/>
             <Print/>
            
            <Text style={styles.result}>{Buttons.result}</Text>
         
     
           

            <View style={styles.buttonsView}>
                {
                    buttons.map((buttons, index) => (
                    
                        <Buttons
                            buttons={buttons}
                            key={index}
                            />))
                }

                <TouchableOpacity
                    style={styles.specialButton}
                    key={buttons.id}
                    >
                    <Text style={styles.specialButtonText}>=</Text>
                </TouchableOpacity>


            </View>

        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#243540",
        paddingRight: "5%",
    },

    result: {
        color: "#F2F2F2",
        fontSize: 50,
        alignSelf: "flex-end",
    },

   

    buttonsView: {
        flexDirection: "row",
        flexWrap: "wrap",
    },

    specialButton: {
        marginLeft: "5%",
        marginTop: "5%",
        height: 50,
        width: "45%",
        backgroundColor: "#ED802E",
        shadowColor: "#000",
        elevation: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
    },

    specialButtonText: {
        fontSize: 20,
        color: "#F2F2F2",
    },

    whiteText: {
        fontSize: 24,
        color: "#808080",
        alignSelf: "flex-end",
        marginVertical: "5%",
    },


})

