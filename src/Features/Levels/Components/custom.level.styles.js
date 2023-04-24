import styled from 'styled-components/native';

export const ContainerBtn = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Rounded = styled.View`
    width: 96px;
    height: 96px;
    background-color: ${ props => props.theme.colors.bg.secondary };
    text-align: center;
    border-radius: 50%;
`;

export const RoundedText = styled.Text`
    font-size: ${ props => props.theme.fontSize.circleBtn };
    color: ${ props => props.theme.colors.text.secondary };
`;
