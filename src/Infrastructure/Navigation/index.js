import React from 'react';

// Navigation container
import { NavigationContainer } from '@react-navigation/native';

// Stack Navigator
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { WelcomeGame } from '../../Features/Welcome'; // Welcome Screen;
import { BothFitScreen } from '../../Features/Both-fit'; // Both-Fit Screen;
import { LevelScreen } from '../../Features/Levels'; // Level Screen;
import { ShapeFitScreen } from '../../Features/Shape-fit'; // Shape-Fit Screen;
import { ColorFitScreen } from '../../Features/Color-fit'; // Color-Fit screen;

// Use Context Components
import { BothFitContextProvider } from '../../Services/Both-fit/both-fit.context'; // Both fit context provider
import { ColorFitContextProvider } from '../../Services/Color-fit/color-fit.context'; // Color fit context provider
import { ShapeFitContextProvider } from '../../Services/Shape-fit/shape-fit.context';

const GameStack = createStackNavigator();

export const Navigation = () => {

    return (
        <>

            <ShapeFitContextProvider>
                <ColorFitContextProvider>
                    <BothFitContextProvider>

                        <NavigationContainer>
                            <GameStack.Navigator screenOptions={{
                                headerShown: false
                            }}>

                                <GameStack.Screen
                                    name="Welcome"
                                    component={WelcomeGame}
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

                            <GameStack.Screen 
                                name="ColorFit"
                                component={ ColorFitScreen }
                            />

                            </GameStack.Navigator>
                        </NavigationContainer>

                    </BothFitContextProvider>
                </ColorFitContextProvider>
            </ShapeFitContextProvider>

        </>
    )
}
