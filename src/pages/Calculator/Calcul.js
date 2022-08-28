import {
    Text,
    StyleSheet,
  
} from "react-native"
import { useEffect, useState } from "react"

let digit = []


export function Calcul(label) {
 digit.push(label)
 
 Print () 

    //console.warn(digit)
        return (   
           (digit)
        ) 
        
    
}

export function Print (){
   
    console.log(digit)
   
    return(
        <Text>{digit}</Text>
        
        
    )

}




const styles = StyleSheet.create({
   
   
  

})

