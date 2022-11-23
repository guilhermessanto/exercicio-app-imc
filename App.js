import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import Imc from "./components/Imc";

export default function App() {
  const [nome, setNome] = useState("");
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  const capturaNome = (valor) => {
    setNome(valor);
  };
  const capturaPeso = (valor) => {
    setPeso(valor);
  };
  const capturaAltura = (valor) => {
    setAltura(valor);
  };

  const calculaImc = () => {
    const resultado = Imc(peso, altura);

    if (resultado < 18.5) {
      Alert.alert(
        `Olá ${nome}!`,
        `Seu IMC é de ${resultado} portanto o resultado sua situação é de magreza `
      );
    } else if (resultado >= 18.5 && resultado <= 25) {
      Alert.alert(
        `Olá ${nome}!`,
        `Seu IMC é de ${resultado} portanto o resultado é considerado de Normalidade `
      );
    } else if (resultado > 25 && resultado < 30) {
      Alert.alert(
        `Olá ${nome}!`,
        `Seu IMC é de ${resultado} portanto o resultado é considerado em Sobrepeso`
      );
    } else if (resultado >= 30 && resultado < 40) {
      Alert.alert(
        `Olá ${nome}!`,
        `Seu IMC é de ${resultado} portanto o resultado é considerado Obesidade`
      );
    } else if (resultado >= 40) {
      Alert.alert(
        `Olá ${nome}!`,
        `Seu IMC é de ${resultado} portanto o resultado  é considerado Obesidade grave`
      );
      return;
    }
  };

  return (
    <SafeAreaView style={estilos.container}>
      <StatusBar style="auto" />
      <View style={estilos.boxTitulo}>
        <Text style={estilos.titulo}>App IMC</Text>
      </View>
      <View>
        <TextInput
          style={estilos.input}
          onChangeText={capturaNome}
          placeholder="informe seu nome"
          keyboardType="default"
        />
        <View style={estilos.boxInput}>
          <TextInput
            style={estilos.inputDois}
            onChangeText={capturaPeso}
            placeholder="Peso (ex:80)"
            keyboardType="numeric"
          />
          <TextInput
            style={estilos.inputDois}
            onChangeText={capturaAltura}
            placeholder="Altura(ex: 1.73)"
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={estilos.boxBotao}>
        <Pressable style={estilos.botao} onPress={calculaImc}>
          <Text>Calcular IMC</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxTitulo: {
    paddingVertical: 50,
    backgroundColor: "black",
  },
  titulo: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  boxBotao: {
    flexDirection: "row",
    justifyContent: "center",
  },
  botao: {
    height: 45,
    width: "95%",
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  boxInput: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputDois: {
    flex: 1,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
