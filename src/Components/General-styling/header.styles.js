import styled from 'styled-components';

export const MainHeader = styled.Text`
    font-size: ${ props => props.theme.sizes[5] };
    text-align: center;
    margin-top: 75px;
    margin-bottom: 142px;
    color: ${ props => props.theme.colors.text.primary };
    font-family: ${ props => props.theme.fonts.titleHead };
`;


export const Spacer = styled.View`
    margin: 46px 0px;
`;
