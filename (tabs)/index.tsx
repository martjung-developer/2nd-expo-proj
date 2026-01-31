import {
  SafeAreaView,
  ScrollView,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
} from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.label}>Full Name</Text>
        <TextInput
          placeholder="Enter your name here"
          placeholderTextColor="#666"
          style={styles.input}
        />

        {/* Styled Button using Pressable */}
        <Pressable
          onPress={() => alert('Entered!')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Enter</Text>
        </Pressable>

        <Pressable
          onPress={() => alert('Your name has been cancelled!')}
          style={styles.pressable}
        >
          <Text>Cancel</Text>
        </Pressable>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  label: {
    marginBottom: 6,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    color: '#000',
  },
  button: {
    padding: 12,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  pressable: {
    marginTop: 5,
    padding: 10,
    backgroundColor: '#ddd',
    alignItems: 'center',
    borderRadius: 6,
  },
});
