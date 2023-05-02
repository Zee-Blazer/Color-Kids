import styled from 'styled-components/native';

export const AnswerContainer = styled.View`
    width: 100%;
    height: 300px;
    border-bottom-width: 3px;
    border-left-width: 3px;
    border-right-width: 3px;
    border-bottom-left-radius: 178px;
    border-bottom-right-radius: 178px; 
    overflow: hidden;
    margin: 2px 0px;
    border-color: ${ props => props.theme.colors.ui.pure };
`;

export const AttemptCount = styled.Text`
    font-size: 24px;
    font-family: ${ props => props.theme.fonts.titleHead };
    margin-left: 82%;
    margin-top: ${ props => props.theme.space[3] };
`;

export const MiddleShape = styled.View`
    align-self: center;
    margin-top: 32px;
`;

export const AnswerText = styled.Text`
    font-size: 24px;
    text-align: center;
    font-family: ${ props => props.theme.fonts.titleHead };
    margin-top: 21px;
`;
