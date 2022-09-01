import { SafeAreaView, View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Dimensions } from "react-native"
import Buttons from "./Buttons"
import Calcul from "./Calcul"
import { useState } from "react"
import image from "../../../assets/iconeSeta.png"



export default function Calculator() {

    const buttons = [
        { label: "AC", type: "first" },
        { label: "", type: "third" },
        { label: "%", type: "first" },
        { label: "/", type: "first" },
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


    const [numbers, setNumbers] = useState([""])

    const [result, setResult] = useState("0")



    function numbersArray(n) {

        if (n === "AC") {
            setNumbers ("")
            setResult ("")
        }

        else if (n=== "" && numbers.length >0)
        
        {
            
          console.warn (numbers.length)
        }
        
        else {
            
            setNumbers(numbers + n)
        }
    }

    function generateResult() {
        const value = eval(numbers)
        setResult(value)

    }




    return (

        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#808080" />


            <Text style={styles.result}>{result}</Text>
            <Text style={styles.whiteText}>{numbers}</Text>


            <View style={styles.buttonsView}    >
                {
                    buttons.map((buttons) => (
                        <TouchableOpacity style={styles.button} onPress={() => numbersArray(buttons.label)}>
                            {buttons.type === "first" && <Text style={styles.buttonText} key={buttons.label}>{buttons.label}</Text>}
                            {buttons.type === "second" && <Text style={styles.buttonTextWhite}>{buttons.label}</Text>}
                            {buttons.type === "third" && <Image style={styles.image} source={image} />}
                            
                        </TouchableOpacity>

                    ))
                }

                <TouchableOpacity
                    style={styles.specialButton}
                    key={buttons.id}
                    onPress={generateResult}
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

    buttonText: {
        fontSize: 20,
        color: "#ED802E",

    },

    buttonTextWhite: {
        fontSize: 20,
        color: "#808080",

    },

    button: {
        marginLeft: "5%",
        marginTop: "5%",
        height: Dimensions.get("window").width / 7,
        width: "20%",
        backgroundColor: "#243540",
        shadowColor: "#000",
        elevation: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
    },

    buttonText: {
        fontSize: 20,
        color: "#ED802E",
    },

    image:
    {
        width: 30,
        height: 20,
    },

    dividir:
    {
        width: 13,
        height: 11,
    }


})

