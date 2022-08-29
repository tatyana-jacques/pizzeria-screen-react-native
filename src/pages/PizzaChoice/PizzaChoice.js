import { SafeAreaView, Text, StyleSheet, Image, ScrollView, View, Dimensions, TouchableOpacity } from "react-native"
import pizza from "./pizza.jpg"
import olive from "./azeitona.jpeg"
import cheese from "./cheese.jpeg"
import oregano from "./oregano.jpeg"
import tomato from "./tomato.jpeg"
import rosemary from "./rosemary.jpeg"


export default function PizzaChoice() {

  return (
    <SafeAreaView style={styles.container}>


      <Image source={pizza} style={styles.pizza} ></Image>


      <View style={styles.view}>

        <View style={styles.textBox}>
          <Text style={{ fontSize: 22, }}>Margherita</Text>
          <Text style={styles.informationText}>540gr   .    330kkal</Text>

          <View style={styles.price}>
            <View style={styles.number}>
              <TouchableOpacity>
                <Text style={{ fontSize: 20 }}>-</Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 18 }}>1</Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 20 }}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>$12,95</Text>
          </View>
        </View>

        <ScrollView horizontal>
          <Image style={styles.ingredients} source={cheese}></Image>
          <Image style={styles.ingredients} source={olive}></Image>
          <Image style={styles.ingredients} source={oregano}></Image>
          <Image style={styles.ingredients} source={tomato}></Image>
          <Image style={styles.ingredients} source={rosemary}></Image>
        </ScrollView>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>



      </View>

    </SafeAreaView>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: "100%",

  },
  view: {
    backgroundColor: "#fff",
    width: "83%",
    heigth: "60%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    flex: 1,
    marginVertical: 10,

  },
  textBox: {
    width: "100%",
    height: "30%",
    padding: 10,

  },
  pizza: {
    width: "50%",
    height: "35%",
    borderRadius: 100,
    marginVertical: 10,

  },

  price: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 10,
  },

  ingredients:
  {
    width: Dimensions.get("window").width / 4,
    height: "70%",
    marginHorizontal: 5,
    marginTop: 30,
    borderRadius: 15,
  },
  number:
  {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#eee',
    width: 80,
    justifyContent: "space-between",
    padding: 5,

  },


  button: {
    backgroundColor: "#E76F51",
    width: "80%",
    height: "13%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  buttonText: {
    fontSize: 20,
  },



  informationText: {
    color: '#bbb',
    fontSize: 16,
    margin: 5,


  }
});
