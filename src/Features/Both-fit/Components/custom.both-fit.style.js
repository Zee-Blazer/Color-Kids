import styled from 'styled-components/native';

export const AnswerContainer = styled.View`
    width: 100%;
    height: 290px;
    border-bottom-width: 3px;
    border-left-width: 3px;
    border-right-width: 3px;
    border-bottom-left-radius: 178px;
    border-bottom-right-radius: 178px; 
    overflow: hidden;
    margin: 2px 0px;
    border-color: ${props => props.theme.colors.bg.secondary};
`;

export const AttemptCount = styled.Text`
    font-size: 24px;
    margin-left: 82%;
    margin-top: ${props => props.theme.space[3]};
    font-family: ${props => props.theme.fonts.titleHead};
`;


export const MiddleShape = styled.View`
    align-self: center;
    margin-top: 32px;
`;

export const AnswerText = styled.Text`
    font-size: 24px;
    text-align: center;
    font-family: ${props => props.theme.fonts.titleHead};
    margin-top: 21px;
`;

export const TitleHeader = styled.Text`
    font-size: 27px;
    text-align: center;
    margin-top: 42px;
    font-family: ${props => props.theme.fonts.titleHead};
`;

export const ItemContainer = styled.ScrollView`
    margin: 7px 8px;
    margin-top: 32px;
`;

export const StyledCenterCont = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const StyledFlatList = styled.FlatList`
    margin: 7px 8px;
`;

export const GoBtn = styled.TouchableOpacity`
    background-color: ${props => props.theme.colors.bg.secondary};
    padding: 7px;
    margin: 12px;
    margin-top: 18px;
    border-radius: 10px;
    width: 140px;
    align-self: center;
`;

export const GoBtnText = styled.Text`
    color: white;
    text-align: center;
    font-size: 24px;
`;

export const FadedBackgroundMessage = styled.View`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.51);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
`;

export const FadeMainContainer = styled.View`
    width: 324px;
    height: 384px;
    background-color: ${props => props.theme.colors.bg.primary};
    margin: 36% 36px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding-top: 48px;
`;

export const MissionResult = styled.View`
    width: 190px;
    border-width: 1px;
    position: absolute;
    top: 95;
    left: 104;
    height: 69px;
    border-top-left-radius: 16px;
    background-color: ${props => props.theme.colors.bg.primary};
    border-top-right-radius: 16px;
    z-index: 3;
    padding-top: 19px;
`;

export const MissionResultText = styled.Text`
    font-size: 21px;
    text-align: center;
    color: ${props => props.msg === "err" ? props.theme.colors.text.failed : props.theme.colors.text.success};
    font-family: ${props => props.theme.fonts.titleHead};
`;


export const DisplayContTitleMsg = styled.Text`
    font-size: 32px;
    text-align: center;
    color: ${props => props.msg === "err" ? props.theme.colors.text.failed : props.theme.colors.text.success};
    font-family: ${props => props.theme.fonts.titleHead};
`;

export const IconDisplayCont = styled.View`
    background-color: ${props => props.theme.colors.bg.secondary};
    border-radius: 50;
    width: 65px;
    height: 65px;
    align-self: center;
    margin-top: 38px;
`;
