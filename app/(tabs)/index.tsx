import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { firestore } from '../../src/config/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export default function App() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [genre, setGenre] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleAddProduct = () => {
    if (title && price && genre && imageUrl) {
      addDoc(collection(firestore, 'products'), {
        title: title,
        price: parseFloat(price),
        genre: genre,
        imageUrl: imageUrl
      })
      .then(() => {
        Alert.alert('Sucesso', 'Produto adicionado com sucesso!');
        setTitle('');
        setPrice('');
        setGenre('');
        setImageUrl('');
      })
      .catch((error) => {
        Alert.alert('Erro', 'Erro ao adicionar produto: ' + error.message);
      });
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Gênero"
        value={genre}
        onChangeText={setGenre}
      />
      <TextInput
        style={styles.input}
        placeholder="Capa (URL)"
        value={imageUrl}
        onChangeText={setImageUrl}
      />
      <Button
        title="Enviar"
        onPress={handleAddProduct}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '80%',
  },
});
