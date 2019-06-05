import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Image } from 'react-native';
import Button from './component/ButtonComponent';

const frases = [
  'Não coloque limite em seus sonhos, coloque fé.',
  'Tudo posso naquele que me fortalece.',
  'O maior medo de estar sozinho em casa é descobrir que você não está!',
  'Não vem de garfo que hoje é sopa.',
  'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
  'A descoberta consiste em ver o que todos viram e em pensar no que ninguém pensou.',
  'Nenhuma grande descoberta foi feita jamais sem um palpite ousado.',
  'O progresso do homem não é mais do que uma descoberta gradual de que as suas perguntas não têm significado.',
  'Os erros são os portais da descoberta.',
  'Toda a descoberta da ciência pura é potencialmente subversiva; por vezes a ciência deve ser tratada como um inimigo possível.',
  'Imagine uma nova história para sua vida e acredite nela.',
  'Descubra sua própria luz, ou passará o resto da vida sendo um pálido reflexo da luz alheia.',
];

const botaoPressionado = () => {
  let frase = frases[Math.floor(Math.random() * frases.length)]
  Alert.alert('Frase do Dia: ', frase);
}

const imagem = require('./img/logo.png');

export default class App extends Component {
  render() {
    return (
      <View style={estilo.container}>
        <Image source={imagem}/>
        <View style={estilo.botaoContainer}>
        <Button texto="Mensagem" cor="darkgreen" Func={botaoPressionado} />
        </View>
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botaoContainer:{
    paddingTop: 50,
  },
  botao:{
    borderRadius:20
  }
})