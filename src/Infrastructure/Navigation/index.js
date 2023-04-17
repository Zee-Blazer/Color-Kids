import React from 'react';

// Navigation container
import { NavigationContainer } from '@react-navigation/native';

// Stack Navigator
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { WelcomeGame } from '../../Features/Welcome'; // Welcome Screen
import { BothFitScreen } from '../../Features/Both-fit'; // Both-Fit Screen
import { ColorFitScren } from '../../Features/Color-fit'; // Color-Fit Screen
import { LevelScreen } from '../../Features/Levels'; // Level Screen
import { ShapeFitScreen } from '../../Features/Shape-fit'; // Shape-Fit Screen

const GameStack = createStackNavigator();

export const Navigation = () => {

    return (
        <NavigationContainer>
            <GameStack.Navigator screenOptions={{
                headerShown: false
            }}>

                <GameStack.Screen
                    name="Welcome"
                    component={ WelcomeGame }
                />

                <GameStack.Screen
                    name="Levels"
                    component={ LevelScreen }
                />

                <GameStack.Screen
                    name="BothFit"
                    component={ BothFitScreen }
                />

                <GameStack.Screen
                    name="ShapeFit"
                    component={ ShapeFitScreen }
                />

                {/* <GameStack.Screen
                    name="ColorFit"
                    component={ ColorFitScren }
                /> */}

            </GameStack.Navigator>
        </NavigationContainer>
    )
}
