// app/(tabs)/index.tsx
import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton';

const firebaseConfig = {
  apiKey: "AIzaSyCuL1G4oW5Q15OBXZ0q2p7euCvsDG9wm6g",
  authDomain: "expo-firebase-connect.firebaseapp.com",
  projectId: "expo-firebase-connect",
  storageBucket: "expo-firebase-connect.firebasestorage.app",
  messagingSenderId: "668483947792",
  appId: "1:668483947792:web:fef6484994fe08041ca995",
  measurementId: "G-V56S2XFTL4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function App() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const addStudent = async () => {
    setStatus('loading');
    try {
      const docRef = await addDoc(collection(db, 'students'), {
        name: 'Julian',
        course: 'IT',
        createdAt: new Date(),
      });
      console.log('Document written with ID:', docRef.id);
      setStatus('success');
    } catch (error) {
      console.error('Error adding document:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Unknown error');
      setStatus('error');
    }
  };

  const resetStatus = () => setStatus('idle');

  return (
    <View style={styles.container}>

      {status === 'success' && (
        <Text style={styles.successText}>Student added to Firebase!</Text>
      )}
      {status === 'error' && (
        <>
          <Text style={styles.errorText}>Failed to connect to Firebase</Text>
          <Text style={styles.errorDetail}>{errorMessage}</Text>
        </>
      )}

      <CustomButton
        title="Add Student"
        onPress={addStudent}
        variant="primary"
        loading={status === 'loading'}
        disabled={status === 'loading'}
      />

      {(status === 'success' || status === 'error') && (
        <CustomButton
          title="Reset"
          onPress={resetStatus}
          variant="outline"
        />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  successText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 16,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 8,
    textAlign: 'center',
  },
  errorDetail: {
    fontSize: 13,
    color: '#888',
    marginBottom: 16,
    textAlign: 'center',
  },
});