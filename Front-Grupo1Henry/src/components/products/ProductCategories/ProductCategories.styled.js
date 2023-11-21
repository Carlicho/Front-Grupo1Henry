import styled from "styled-components";

export const container = styled.div`
    width: 100%;
    height: 100vh;
`
 export const Dropdown = styled.div`
    width: 400px;
`

export const DropdownBtn = styled(Dropdown)`
    padding: 15px 20;
    background-color: white;
    box-shadow: 3px 3px 10px 6px rgba(0,0,0,0.06);
    display: flex;
`
export const DropdownContent = styled.div`
    background-color: white;
    
`

export const DropdownItem = styled.div`
    font-size: 1rem;
`