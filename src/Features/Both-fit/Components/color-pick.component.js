import React, { useState, useEffect } from 'react';

// Styled components from Both-fit custom style
import { TitleHeader, ItemContainer, StyledCenterCont, StyledFlatList } from "./custom.both-fit.style";

// Shapes imported
import { Circle } from "../../../Components/Shape-styling/all-shapes.style";

// Total color items
import { colors } from "../../../Services/game-list.service";

// Specific Color component
import { SpecificColor } from './Colors/specific-color.component';

// The General function that helps create the array for the state color
import { generalFunction } from '../../../Services/genera_func.component';


export const ColorPick = ({ numColor, colorer }) => {

    const [col, setCol] = useState([]);

    useEffect( () => {
        setCol(generalFunction(numColor, colors));
    }, [] )

    const getValue = (e) => colorer(e)

    return (
        <>
            <TitleHeader>Color</TitleHeader>

            <StyledCenterCont>
                <StyledFlatList 
                    horizontal
                    data={col}
                    renderItem={ ({item}) => {

                        return (
                            <SpecificColor type={item} getValue={ getValue } />
                        )
                    } }
                    keyExtractor={ item => item }
                />
            </StyledCenterCont>

        </>
    )
}
