import { useState } from "react";
import { View, Text, KeyboardAvoidingView, TextInput, StyleSheet, FlatList, SafeAreaView } from "react-native";

const QueryScreen = ({ navigation, route }) => {
  const [text, setText] = useState('')
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([])

  const handleQuery = () => {
    console.log(text)
    const query = { question: text, id: questionsAndAnswers.length }
    setQuestionsAndAnswers([...questionsAndAnswers, query])
    setText('')
  }

  const Item = ({ title }) => {
    return (
      <View style={styles.listItem}>
        <Text style={styles.title}>{title.question}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container} >
      <View style={styles.content}>
        <FlatList
          data={questionsAndAnswers}
          renderItem={({ item }) => <Item title={item} />}
          keyExtractor={item => item.id}
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
  listItem: {
    backgroundColor: '#e3e3e3',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20
  },
})

export default QueryScreen