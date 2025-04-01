import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';

const WorkoutScreen = ({ navigation }) => {
  const { workoutCount, setWorkoutCount, resetWorkoutCount } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Workouts Completed: ${workoutCount}`}</Text>
      <Button title="Complete a Workout" onPress={() => setWorkoutCount(workoutCount + 1)} />
      <Button title="Reset Workouts" onPress={() => resetWorkoutCount()} />
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default WorkoutScreen;
