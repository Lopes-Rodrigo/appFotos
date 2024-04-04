import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";
import { Image } from "expo-image";
import { Text } from "react-native-paper";
import styles from "../config/styles";
import { useEffect, useState } from "react";

export default function HomeScreen({}) {
  const navigation = useNavigation();

  // faz o mesmo que as duas funções acima
  useEffect(() => {
    console.log("ENTREI");
  }, []);

  return (
    <View style={styles.container}>
      {/* note que aqui estamos usando o TEXT de Native Paper*/}
      {/* ele possui alguns props que podemos usar para melhorar a UI */}
      <Text variant="titleLarge">Bem Vindo</Text>
      <Text variant="bodyMedium">Guarde as lembranças da sua viagem</Text>
      <Image
        source={require("../../assets/images.jpg")}
        style={{ width: 1000, height: 600 }}
      />
    </View>
  );
}
