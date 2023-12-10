import styled from "styled-components";

export const ContainerGeneralFooter = styled.div`
    border: 2px solid black;
    background: rgb(255, 255, 255);
    background: linear-gradient(351deg, rgba(253, 253, 253, 0.762) 6%, rgba(228, 228, 228, 0.651) 42%, rgb(209, 209, 209) 98%);
    box-shadow:  1px 1px 4px #707070,
             -1px -1px 3px #2a2a2a;
    height: 20vh;
    
`

export const ContainerFlex = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #000;
`
export const ContainerWrapperContent = styled.div`
    width: 25%;
`

export const SeparateVertical = styled.div`
     border-left: 1px solid white;
     height: 80%;
     margin-top: 10px;
`
export const ContainerLogo = styled.img`
    float: right;
    height: 80%;
    margin-right: 20px;
    margin-top: 10px;
`
export const WrapperContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #000;
    font-size:1.2rem;
    letter-spacing: 1px;
`

export const ButtonFooter = styled.button`
    border: 1px solid white;
    width: 100%;
    border-radius: 3px;
    color: #000;
    font-size:1rem;
    letter-spacing: 1px;
    background-color: #fd611a;
    margin-bottom: 5%;
    cursor: pointer;
    &:hover{
        background-color: white;
        color: #fd611a;
    }
`

export const ContainerButtons = styled.div`
    margin-top: 20px;
`

export const ButtonContactFooter = styled(ButtonFooter)`
    width: 70%;
`

export const ButtonJobFooter = styled(ButtonFooter)`
    width: 60%;
`

export const LogosGeneralContainerFooter = styled.img`
    display: flex;
    flex-direction: column;
    width: 15%;
`

export const ContainerFollowme = styled.div`
    color: white;
    text-align: left;
    margin-left: 2%;
    padding-top: 15px;
    padding-left: 25px;
    `
export const ContainerLogos = styled.div`
    display: flex;
    padding-left: 10px;
    padding-top: 10PX;
`

export const LogosContact = styled.div`
    padding-left: 20px;
`