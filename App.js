//importa o react e o useState
//usestate serve para criar volores quepodem mudar na tela

import React, { useState } from 'react';
//importa componentes nativosdo react native
import {
  View, //caixa / area de tela
  Text, //textos
  TouchableOpacity, //botao
  StyleSheet, //estilos
} from 'react-native'; //botoes costumizavel
//componente principal APP
export default function App() {
  //Cria uma estado (variavel php) chamado "pontos"
  //pontos = valor atual
  // setPontos = função para alterar o valor
  // 0 =valor inicial
  const [pontos, setPontos] = useState(0);
  //Funçao para aumentar1 ponto 

  function aumentar() {
    // pega o valor auto e soma +1
    setPontos(pontos + 1);
  }
  //Função para diminuir 1 ponto 
  function diminuir() {
    //pega o valor atual e  subtrai -1
    setPontos(pontos - 1);
  }
   //Função para resetar o contador
  function resetar() {
    //volta o valor para 0
    setPontos(0);
  }
// tudo que esta no RETURN aparece na tela
  return (
    //View principal do APP
    <View style={styles.container}>
      {/*Ttulo do APP*/}
      
      <Text style={styles.titulo}>
        🎮 Contador Gamer
      </Text>
     {/*Mostra valor dos pontos */}
      <Text style={styles.pontos}>
        {/* area dos botoes +1 e -1 */}
        {pontos}
      </Text>

      <View style={styles.areaBotoes}>
        
        <TouchableOpacity
          style={styles.botao}
          onPress={aumentar}
        >
          <Text style={styles.textoBotao}>
            +1
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={diminuir}
        >
          <Text style={styles.textoBotao}>
            -1
          </Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity
        style={styles.botaoReset}
        onPress={resetar}
      >
        <Text style={styles.textoBotao}>
          Resetar
        </Text>
      </TouchableOpacity>

    </View>
  );
}
 //AREA DE ESTILO DO APP
const styles = StyleSheet.create({
  // ESTILO DE TELA PRINCIPAL 
  container: {
    //OCUPA A TELA TODA
    flex: 1,
    // COR DO FUNDO
    backgroundColor: '#121212',
    // CENTRALIZA HORIZONTALMENTE
    alignItems: 'center',
    // CENTRALIZA VERTICALMENTE
    justifyContent: 'center',
    // ESPAÇAMENTO INTERNO
    padding: 20,
  },
   //ESTILO DO TITULO
  titulo: {
    //TAMANHO DE FONTE
    fontSize: 32,
    //COR DO TEXTO
    color: '#00ff88',
    //TEXTO EM NEGRETO
    fontWeight: 'bold',
    //ESPAÇO ABAIXO
    marginBottom: 30,
  },
// ESTILO DOS PONTOS 
  pontos: {
    //TAMANHO GIGANTE
    fontSize: 80,
    color: '#ffffff',
    marginBottom: 40,
    //NEGRITO
    fontWeight: 'bold',
  },
  // AREA  DOS BOTOES
  areaBotoes: {
    //DEIXE UM BOTÃO AO LADO DO OUTRO
    flexDirection: 'row',
    //ESPAÇO ABAIXO
    marginBottom: 20,
  },
// ESTILO DE BOTOES +1 E -1
  botao: {
    //COR DO BOTAO 
    backgroundColor: '#00ff88',
    //ESPAÇO VERTICAL
    paddingVertical: 15,
    //ESPAÇAMENTO HORIZONTAL
    paddingHorizontal: 30,
    //ARREDONDA AS BORDAS 
    borderRadius: 12,
    // ESPAÇO ENTRE BOTOES
    marginHorizontal: 10,
  },

  //ESTILO DO BOTAO RESETAR
  botaoReset: {
    //COR VERMELHA
    backgroundColor: '#ff3b30',
    //ESPAÇAMENTOS
    paddingVertical: 15,
    paddingHorizontal: 40,
    //BORDAS ARREDONDADAS
    borderRadius: 12,
  },
//ESTILO DO TEXTO DOS BOTOES
  textoBotao: {
    //TAMNHO DA LETRA
    fontSize: 22,
    //COR DO TEXTO 
    color: '#000',
    //NEGRITO
    fontWeight: 'bold',
  },
});