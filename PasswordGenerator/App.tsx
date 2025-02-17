import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import * as yup from 'yup';

let PasswordSchema = yup.object().shape({
  passwordLength: yup.number()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'Should be max of 16 characters')
    .required('Length is required')
})

export default function App() {
  const [password, setPassword] = useState("");
  const [isPassGenerated, setIsPassGenerated] = useState(false);

  const [lowerCase, setIsLowerCase] = useState(true);
  const [upperCase, setIsUpperCase] = useState(false);
  const [numbers, setIsNumbers] = useState(false);
  const [symbols, setIsSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = "";

    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
    const digitChars = "0123456789"
    const specialChars = "!@#$%^&*()_+"

    if (upperCase) {
      characterList += upperCaseChars
    }
    if (lowerCase) {
      characterList += lowerCaseChars
    }
    if (numbers) {
      characterList += digitChars
    }
    if (symbols) {
      characterList += specialChars
    }

    const passwordResult = createPassword(characterList, passwordLength);

    setPassword(passwordResult);
    setIsPassGenerated(true);

  }

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  }

  const resetPasswordState = () => {
    setPassword("");
    setIsLowerCase(true);
    setIsPassGenerated(false);
    setIsNumbers(false);
    setIsSymbols(false);
    setIsUpperCase(false);
  }


  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})