/**
 * https://www.youtube.com/watch?v=Hf4MJH0jDb4&t=1710s
 */

import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import uuid from 'uuid-random';

//Components
import Header from './components/Header'
import ListItem from './components/ListItems'
import AddItem from './components/AddItem'



const App = () =>{
    const [items, setItems]= useState([
        {id: uuid(), text: 'Milk'},
        {id: uuid(), text: 'Eggs'},
        {id: uuid(), text: 'Bread'},
        {id: uuid(), text: 'Juice'},
    ])

    const deleteItem = (id) =>{
        setItems(prevItems => {
            return prevItems.filter(item => item.id!== id)
        })
    }

    const addItem = (text)=>{
        if(!text){
            Alert.alert("Error");
        }else{
            setItems(prevItems =>{
                return [{id: uuid(), text}, ...prevItems]
            })
        }
    }

    return (
        <View style={styles.container}>
            <Header title="ShoppingList"/>
            <AddItem addNewItem={addItem}/>
            <FlatList
                data={items}
                renderItem={({item})=>(
                    <ListItem 
                        item={item} 
                        deleteItem={deleteItem}
                    />
                )}
            />
        </View>
    );
};

const styles= StyleSheet.create({
    container:{
        flex: 1, 
    },
})

export default App;