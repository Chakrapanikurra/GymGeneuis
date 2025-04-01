import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AppContext } from '../context/AppContext';

const WorkoutScreen = ({ navigation }) => {
  const { workoutCount, setWorkoutCount, resetWorkoutCount } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Workouts Completed: ${workoutCount}`}</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => setWorkoutCount(workoutCount + 1)}
      >
        <Text style={styles.buttonText}>Complete a Workout</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.resetButton]} 
        onPress={() => resetWorkoutCount()}
      >
        <Text style={styles.buttonText}>Reset Workouts</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.profileButton]} 
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.buttonText}>Go to Profile</Text>
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#ff5733',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center'
  },
  resetButton: {
    backgroundColor: '#333'  // Darker color for reset
  },
  profileButton: {
    backgroundColor: '#1e90ff' // Blue for navigation
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default WorkoutScreen;
