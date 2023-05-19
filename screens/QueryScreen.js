import { useState } from "react"
import { View, Text, KeyboardAvoidingView, TextInput, StyleSheet, FlatList } from "react-native"
import askQuestion from "../utility/networkmanager"

const QueryScreen = ({ navigation, route }) => {
  const [text, setText] = useState('')
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([])

  const handleQuery = async () => {
    console.log('Question: ' + text)
    const question = { value: text, id: questionsAndAnswers.length, style: 'question' }

    setQuestionsAndAnswers([...questionsAndAnswers, question])
    await getAnswer(text)
    
    setText('')
  }

  const getAnswer = async (text) => {
    const answer = await askQuestion(text)
    const answerItem = { value: answer, id: questionsAndAnswers.length + 1, style: 'answer' }

    // setTimeout(() => {
      setQuestionsAndAnswers(arrayWithNewQuestion => [...arrayWithNewQuestion, answerItem])
      console.log('Answer: ' + answer)
    // }, 2000)
  }

  const Item = ({ title }) => {
    // console.log(title)
    return (
      <View style={title.style === 'question' ? styles.listItemQuestion : styles.listItemAnswer}>
        <Text style={styles.title}>{title.value}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container} >
      <View style={styles.content}>
        <FlatList
          data={questionsAndAnswers}
          renderItem={({ item }) => <Item title={item} />}
          keyExtractor={item => item.id.toString()}
          nestedScrollEnabled
        />
      </View>
      <View style={styles.queryViewContainer}>
        <KeyboardAvoidingView behavior="padding" style={styles.queryView} >
          <TextInput
            style={styles.queryInput}
            onChangeText={setText}
            value={text}
            placeholder='Ask me anything...'
            onSubmitEditing={handleQuery}
          />
        </KeyboardAvoidingView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    width: '100%',
    flex: 1
  },
  queryViewContainer: {
    width: '100%'
  },
  queryView: {
    height: 80,
  },
  queryInput: {
    flex: 1,
    margin: 16,
    borderWidth: 1,
    padding: 10,
    borderRadius: 25
  },
  listItemQuestion: {
    backgroundColor: '#e3e3e3',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20
  },
  listItemAnswer: {
    backgroundColor: '#ced7d9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20
  },
})

export default QueryScreen