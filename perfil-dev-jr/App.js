import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';

import HabilidadesScreen from './screens/HabilidadesScreen.js';
import PerfilScreen from './screens/PerfilScreen.js';
import ProjetosScreen from './screens/ProjetosScreen.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Perfil"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#f8fbff',
            borderTopWidth: 1,
            borderTopColor: '#b9dbff',
          },
          tabBarActiveTintColor: '#60a5fa',
          tabBarInactiveTintColor: '#111827',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
          sceneContainerStyle: {
            backgroundColor: '#f8fbff',
          },
          tabBarIcon: ({ color, size }) => {
            const icons = {
              Perfil: 'person-outline',
              Habilidades: 'list-outline',
              Projetos: 'folder-outline',
            };

            return <Ionicons name={icons[route.name]} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Perfil" component={PerfilScreen} />
        <Tab.Screen name="Habilidades" component={HabilidadesScreen} />
        <Tab.Screen name="Projetos" component={ProjetosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}