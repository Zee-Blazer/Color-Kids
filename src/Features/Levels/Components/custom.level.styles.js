import styled from 'styled-components/native';

import { ProgressBar } from 'react-native-paper';

export const ContainerBtn = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin: -28px 46px;
`;

export const Rounded = styled.View`
    width: 96px;
    height: 96px;
    background-color: ${ props => props.theme.colors.bg.secondary };
    text-align: center;
    border-radius: 60px;
    margin-left: ${ props => props.theme.space[4] };
    margin-top: 32px;
    padding-top: 26px;
    font-family: ${ props => props.theme.fonts.titleHead };
`;


export const LockedLevel = styled.View`
    postion: relative;
    padding: 18px 28px;
    background-color: rgba(1, 1, 1, 0.54);
    height: 100%;
    width: 100%;
    border-radius: 50;
`;

export const RoundedText = styled.Text`
    font-size: ${ props => props.theme.fontSize.circleBtn };
    color: ${ props => props.theme.colors.text.secondary };
    text-align: center;
`;

export const ProgressCont = styled.View`
    margin: 2px 58px;
    flex-direction: row;
    align-items: center;
    margin-top: 64px;
`;

export const ProgressLabel = styled.Text`
    text-align: center;
    font-size: 18px;
    margin-right: 4px;
    font-family: ${ props => props.theme.fonts.titleHead };
`;


export const ProgressStage = styled(ProgressBar)`
    width: 200px;
    height: 14px;
    border-radius: 16px;
`;
