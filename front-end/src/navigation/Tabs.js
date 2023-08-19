import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        onPress={onPress}
        style={{
            top: -20,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow
        }}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#791AF6'
        }}>
            {children}
        </View>
    </TouchableOpacity>
)

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 70,
                    right: 70,
                    elevation: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.75)',
                    borderRadius: 50,
                    height: 60
                },
                headerStyle: {
                    opacity: 0.5
                }
            })}
        >
            <Tab.Screen name='Home' component={HomeScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ backgroundColor: focused ? 'rgba(121, 26, 246, 0.3)' : null, borderRadius: 8, padding: 6 }}>
                        <Ionicons name="home-outline" size={22} style={{
                            color: focused ? "#791AF6" : "#969696"
                        }} />
                    </View>
                ),
            }}></Tab.Screen>
            <Tab.Screen name='register' component={RegistrationScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <MaterialCommunityIcons name="rocket-outline" size={40} color="#fff" />
                ),

                tabBarButton: (props) => (
                    <CustomTabBarButton {...props} />
                )
            }}></Tab.Screen>
            <Tab.Screen name='profile' component={ProfileScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ backgroundColor: focused ? 'rgba(121, 26, 246, 0.3)' : null, borderRadius: 8, padding: 6 }}>
                        <Feather name="user" size={22} style={{
                            color: focused ? "#791AF6" : "#969696"
                        }} />
                    </View>
                ),
            }}></Tab.Screen>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 50,
        elevation: 5
    },
})

export default Tabs