import { SafeAreaView, View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native"
import Buttons from "./Buttons"


export default function Calculator() {

    const buttons = [{
        id: 1,
        label: "AC",
        type: "first"
    },

    {
        id: 2,
        label: "",
        type: "third",
    },

    {
        id: 3,
        label: "%",
        type: "first",
    },

    {
        id: 4,
        label: "",
        type: "forth",
    },

    {
        id: 5,
        label: "7",
        type: "second",
    },

    {
        id: 6,
        label: "8",
        type: "second",
    },

    {
        id: 7,
        label: "9",
        type: "second",
    },

    {
        id: 8,
        label: "x",
        type: "first",
    },

    {
        id: 10,
        label: "4",
        type: "second",
    },

    {
        id: 11,
        label: "5",
        type: "second",
    },

    {
        id: 12,
        label: "6",
        type: "second",
    },

    {
        id: 13,
        label: "-",
        type: "first",
    },

    {
        id: 14,
        label: "1",
        type: "second",
    },

    {
        id: 15,
        label: "2",
        type: "second",
    },
    {
        id: 16,
        label: "3",
        type: "second",
    },
    {
        id: 17,
        label: "+",
        type: "first",
    },

    {
        id: 18,
        label: "0",
        type: "second",
    },

    {
        id: 19,
        label: ".",
        type: "second",
    },

    ]



    return (
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <Text style={styles.result}>Resultado</Text>
            <Text style={styles.whiteText}>Aqui vai a conta </Text>

            <View style={styles.buttonsView}>
                {
                    buttons.map((buttons) => (<Buttons buttons={buttons} />))
                }

<TouchableOpacity style={styles.specialButton} key={buttons.id}>
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
        justifyContent: 'center',
        backgroundColor: "#243540",
        paddingRight: "5%",
    },

    result: {
        color: "#F2F2F2",
        fontSize: 50,
        alignSelf: "flex-end",
    },

    whiteText: {
        fontSize: 24,
        color: "#808080",
        alignSelf: "flex-end",
        marginVertical: "5%",
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


})

