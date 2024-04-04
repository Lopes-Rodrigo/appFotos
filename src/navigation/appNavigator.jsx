import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CameraScreen from "../screens/CameraScreen";
import { NavigationContainer } from "@react-navigation/native";
import LocalizacaoScreen from "../screens/LocalizacaoScreen";


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator" // funciona como uma ID da tela, vamos usa-la para chamar esta tela depois
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen" // id da tela
        component={HomeScreen} // aqui é onde será exibido a tela do componente HomeScreen.jsx
        options={{
          title: "Home",
          tabBarIcon: "home",
        }}
      />
      <Tab.Screen
        name="CameraScreen" // id da tela
        component={CameraScreen} // aqui é onde será exibido a tela do componente HomeScreen.jsx
        options={{
          title: "Camera",
          tabBarIcon: "camera",
        }}
      />
      <Tab.Screen
        name="LocalizacaoScreen" // id da tela
        component={LocalizacaoScreen} // aqui é onde será exibido a tela do componente HomeScreen.jsx
        options={{
          title: "Localizacao",
          tabBarIcon: "map",
        }}
      />
      </Tab.Navigator>
  )}