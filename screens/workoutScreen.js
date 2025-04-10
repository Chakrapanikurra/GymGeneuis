import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView
} from 'react-native';
import { AppContext } from '../context/AppContext';
import { Configuration, OpenAIApi, askOpenAI } from '../utils/openai';
import { OPENAI_API_KEY } from '@env';

console.log(OPENAI_API_KEY);


const WorkoutScreen = ({ navigation }) => {
  const { workoutCount, setWorkoutCount, resetWorkoutCount } = useContext(AppContext);
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleAsk = async () => {
    try {
      const result = await askOpenAI(question);
      setResponse(result);
    } catch (error) {
      setResponse('Something went wrong!');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{`Workouts Completed: ${workoutCount}`}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setWorkoutCount(workoutCount + 1)}
      >
        <Text style={styles.buttonText}>Complete a Workout</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.resetButton]}
        onPress={resetWorkoutCount}
      >
        <Text style={styles.buttonText}>Reset Workouts</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.profileButton]}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Ask a workout question"
        value={question}
        onChangeText={setQuestion}
        style={styles.input}
      />
      <Button title="Ask AI" onPress={handleAsk} />

      <Text style={styles.output}>{response}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
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
    width: '100%',
    alignItems: 'center'
  },
  resetButton: {
    backgroundColor: '#333'
  },
  profileButton: {
    backgroundColor: '#1e90ff'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginTop: 30,
    borderRadius: 8
  },
  output: {
    marginTop: 20,
    fontSize: 16
  }
});

export default WorkoutScreen;
