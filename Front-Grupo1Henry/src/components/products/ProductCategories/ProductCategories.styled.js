import styled from "styled-components";

export const container = styled.div`
    width: 100%;
    height: 100vh;
`
 export const Dropdown = styled.div`
    width: 400px;
    /* margin: 100px auto; */
    /* background-color: green; */
    border: 2px solid black;
`

export const DropdownBtn = styled(Dropdown)`
    padding: 15px 20;
    background-color: white;
    box-shadow: 3px 3px 10px 6px rgba(0,0,0,0.06);
    display: flex;
    /* align-items: center;
    justify-content: space-between; */
`
export const DropdownContent = styled.div`
    background-color: white;
    
`

export const DropdownItem = styled.div`
    font-size: 1rem;
`