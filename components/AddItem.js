import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'


const AddItem = (props) =>{
    const [text, setText]=useState('');

    const onChange=(text)=>{
        setText(text);
    }

    const addNewItem=()=>{
        props.addNewItem(text);
    }

    return (
        <View>
            <TextInput 
                placeholder="Add item..." 
                style={styles.input}
                onChangeText={onChange}
            />
            <TouchableOpacity onPress={()=>addNewItem()} style={styles.btn}>
                <Text style={styles.btnText}><Icon name="plus" size={20}/>Add item</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles= StyleSheet.create({
   input:{
       height: 60,
       padding:8,
       fontSize:16
   },
   btn:{
       backgroundColor:'#c2bad8',
       padding:9,
       margin:5
   },
   btnText:{
       color: 'darkslateblue',
       fontSize: 20,
       textAlign: 'center'
   }
})

export default AddItem;