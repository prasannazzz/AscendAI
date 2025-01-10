import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const questions = [
  {
    question: "What does 'HTML' stand for?",
    options: ["HyperText Markup Language", "HighText Machine Language", "Hyper Tool Markup Language", "None of the Above"],
    answer: "HyperText Markup Language",
  },
  {
    question: "Who developed the C programming language?",
    options: ["Dennis Ritchie", "James Gosling", "Bjarne Stroustrup", "Ken Thompson"],
    answer: "Dennis Ritchie",
  },
  {
    question: "Which of the following is a programming language?",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    answer: "JavaScript",
  },
];

const QuizScreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption === null) {
      Alert.alert('Please select an answer');
      return;
    }

    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    // Go to next question or finish quiz
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // Reset selected option
    } else {
      Alert.alert('Quiz Finished!', `Your score is: ${score + 1} / ${questions.length}`);
      setScore(0); // Reset score for next quiz
      setCurrentQuestionIndex(0); // Reset to the first question
    }
  };

  const goBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null); // Reset selected option
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{currentQuestion.question}</Text>

      {/* Progress Indicator */}
      <Text style={styles.questionNumber}>
        Question {currentQuestionIndex + 1} of {questions.length}
      </Text>

      {/* Options */}
      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedOption === option ? styles.selectedOption : null,
            ]}
            onPress={() => handleOptionSelect(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        {/* Back Button */}
        <TouchableOpacity style={styles.navigationButton} onPress={goBack}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        {/* Next/Submit Button */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
          activeOpacity={0.8}
        >
          <Text style={styles.submitButtonText}>
            {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Score */}
      <Text style={styles.scoreText}>Score: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  questionNumber: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  optionsContainer: {
    width: '100%',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 3, // for a slight shadow effect
  },
  selectedOption: {
    backgroundColor: '#4CAF50',
    borderColor: '#388E3C', // Darker green border when selected
  },
  optionText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  navigationButton: {
    backgroundColor: '#bbb',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    flex: 1,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  submitButton: {
    backgroundColor: '#2d87f0',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scoreText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 30,
  },
});

export default QuizScreen;
