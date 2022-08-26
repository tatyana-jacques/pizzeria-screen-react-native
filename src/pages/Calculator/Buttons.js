import {
    TouchableOpacity,
    Text,
    StyleSheet,
    Image,
} from "react-native"

import image from "../../../assets/iconeSeta.png"
import dividir from "../../../assets/dividir.png"


export default function Buttons ({buttons}) {
    return (
        
    <TouchableOpacity style={styles.button} key={buttons.id}>
         {buttons.type ==="first" &&  <Text style={styles.buttonText}>{buttons.label}</Text>}
         {buttons.type ==="second" &&  <Text style={styles.buttonTextWhite}>{buttons.label}</Text>}
         {buttons.type ==="third" &&  <Image style={styles.image} source = {image}/>}
         {buttons.type ==="forth" &&  <Image style={styles.dividir} source = {dividir}/>}

    </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
   

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
        height: 50,
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
        width:30,
        height:20,
    },

    dividir:
    {
        width:13,
        height:11,
    }

})

