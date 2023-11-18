import styled from "styled-components";

export const ContainerGeneralFooter = styled.div`
    border: 2px solid black;
    background-color: #fd611a;
    height: 20vh;
`

export const ContainerFlex = styled.div`
    display: flex;
    justify-content: space-between;
`
export const ContainerWrapperContent = styled.div`
    /* background-color: blue; */
    width: 25%;
    margin-top: 2%;
`

export const SeparateVertical = styled.div`
     border-left: 1px solid white;
     height: 100%;
`
export const ContainerLogo = styled.img`
    width: 25%;
    margin-left: 65%;
`
export const WrapperContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: white;
`

export const ButtonFooter = styled.button`
    border: 1px solid white;
    width: 25%;
    border-radius: 3px;
    color: white;
    background-color: #fd611a;
    margin-bottom: 5%;
    cursor: pointer;
    &:hover{
        background-color: white;
        color: #fd611a;
    }
`
export const ButtonContactFooter = styled(ButtonFooter)`
    width: 70%;
`

export const ButtonJobFooter = styled(ButtonFooter)`
    width: 60%;
    margin-top: 15px;
`

export const LogosGeneralContainerFooter = styled.img`
    display: flex;
    flex-direction: column;
    width: 15%;
`