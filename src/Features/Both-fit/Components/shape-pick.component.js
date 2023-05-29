import React, { useState, useEffect } from 'react';

// React native components
import { FlatList } from 'react-native';

// Styled components
import { TitleHeader, ItemContainer, StyledCenterCont, StyledFlatList } from "./custom.both-fit.style";

// Shapes
import { Triangle, Semicircle, Square, Rectangle, Circle, Trapezoid } from "../../../Components/Shape-styling/all-shapes.style";

// Total shapes
import { shapes } from "../../../Services/game-list.service";

// General functions
import { generalFunction } from '../../../Services/genera_func.component';

// Specific shape
import { SpecificShape } from './specific-shape.component';

export const ShapePick = ({ numShape, shaper }) => {

    const [shap, setShap] = useState([]);

    useEffect( () => {
        setShap(generalFunction(numShape, shapes));
    }, [] )

    const getValue = (e) => shaper(e)


    return (
        <>
            <TitleHeader>Shape</TitleHeader>

            <StyledCenterCont>
                <StyledFlatList 
                    horizontal
                    data={shap}
                    renderItem={ ({item}) => {

                        return (
                            <SpecificShape type={item} src="small" getValue={ getValue } />
                        )
                    } }
                    keyExtractor={ item => item }
                />
            </StyledCenterCont>

        </>
    )
}
