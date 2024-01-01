import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button, Image} from 'react-native';

const App = () => {
  const [playerVal, setPlayerVal] = useState(null);
  const [computerVal, setComputerVal] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [compScore, setCompScore] = useState(0);

  const logic = (playerVal, computerVal) => {
    if (playerVal === computerVal) {
      return 0;
    } else if (
      (playerVal === 'ROCK' && computerVal === 'SCISSORS') ||
      (playerVal === 'SCISSORS' && computerVal === 'PAPER') ||
      (playerVal === 'PAPER' && computerVal === 'ROCK')
    ) {
      return 1;
    } else {
      return -1;
    }
  };

  const decision = playerChoice => {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    const val = logic(playerChoice, compChoice);
    if (val === 1) {
      setPlayerVal(playerChoice);
      setComputerVal(compChoice);
      setPlayerScore(playerScore + 1);
    } else if (val === -1) {
      setPlayerVal(playerChoice);
      setComputerVal(compChoice);
      setCompScore(compScore + 1);
    } else {
      setComputerVal(compChoice);
      setPlayerVal(playerChoice);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{uri: 'https://static.vecteezy.com/system/resources/previews/000/691/497/original/rock-paper-scissors-neon-icons-vector.jpg'}}
          style={{width: 200, height: 120}}
        />
      </View>
      <Text style={styles.title}>Rock, Paper, Scissors Game</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => decision('ROCK')}>
          <Text style={styles.buttonText}>Rock</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => decision('PAPER')}>
          <Text style={styles.buttonText}>Paper</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => decision('SCISSORS')}>
          <Text style={styles.buttonText}>Scissors</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Your choice: {playerVal}</Text>
        <Text style={styles.scoreText}>Computer's choice: {computerVal}</Text>
        <Text style={styles.scoreText}>Your Score: {playerScore}</Text>
        <Text style={styles.scoreText}>Computer Score: {compScore}</Text>
      </View>
      <Button
        title="clear"
        color={'black'}
        onPress={() => {
          setCompScore(null);
          setPlayerScore(null);
          setComputerVal(null);
          setPlayerVal(null);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03f4fc',
    color: '#fff',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: '#222617',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#080807',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scoreContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  scoreText: {
    color: '#0f0f0f',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default App;
