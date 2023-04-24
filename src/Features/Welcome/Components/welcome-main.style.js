import styled from 'styled-components/native';

export const MainBackground = styled.View`
    
`;

export const HomeBtn = styled.View`
    background-color: ${ props => props.theme.colors.bg.secondary };
    margin: ${ props => props.theme.space[3] } ${ props => props.theme.space[5] };
    padding: ${ props => props.theme.space[2] } ${ props => props.theme.space[3] };
    border-radius: 32px;
`;

export const InnerBtn = styled.Text`
    font-size: ${ props => props.theme.fontSize.innerBtn };
    color: ${ props => props.theme.colors.text.secondary };
    text-align: center;
    padding: ${ props => props.theme.space[2] } ${ props => props.theme.space[1] };
`;
