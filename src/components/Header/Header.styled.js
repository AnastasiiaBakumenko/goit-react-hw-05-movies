import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

export const HeaderList = styled.ul`
box-shadow: -4px -21px 86px -6px rgba(0,0,0,0.54);
-webkit-box-shadow: -4px -21px 86px -6px rgba(0,0,0,0.54);
-moz-box-shadow: -4px -21px 86px -6px rgba(0,0,0,0.54);
background-color:#5f9ea0;
border-radius: 15px;
margin-top: 10px;
display: flex;
`;
export const HeaderText = styled.li`
margin:15px;
`

export const HeaderLink = styled(NavLink)`
color:black;
font-size:20px;
font-weight:bold;
text-decoration:none;
`;