import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const WorkoutScreen = ({ navigation }) => {
  return (
   <View style={styles.container}>
         <Text style={styles.title}>Here are your workouts</Text>
         <TouchableOpacity 
           style={styles.button} 
           onPress={() => navigation.navigate('Profile')}
         >
           <Text style={styles.buttonText}>Go to Workouts</Text>
         </TouchableOpacity>
       </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#f5f5f5'
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20
    },
    button: {
      backgroundColor: '#ff5733',
      padding: 15,
      borderRadius: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold'
    }
  });
  

export default WorkoutScreen;
