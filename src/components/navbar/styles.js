import styled from 'styled-components';

export const Navbar = styled.div`
    height:100px;
    width:100%;
    display: flex;
    align-items:center;
    font-size:20px;
    position:absolute;
    border-bottom:2px #6096BA solid;
    justify-content:flex-end;
`;

export const Logo = styled.img`
    height:75%;
    width:120px;
    position:absolute;
    left:0px;
    margin-left:20px;
    
`;

export const Button = styled.button`
    background-color:transparent;
    width:120px;
    height:100%;
    border:none;
    margin-left:20px;
    border-bottom:2px #6096BA solid;
    text-align:center;
    font-size:100%;
    transition: width 0.3s;
    align-self: flex-end;
    :focus{
        outline:none;
    }
    :hover{
        background-color:#D6EFFF;
        cursor: pointer;
        width:150px;
    }
    ::selection{
        outline:none;
    }
    :active{
        background-color:#C2E8FF;
    }
`;

export const ButtonLogin = styled(Button)`
    right:0%;
    background-color:#6096BA;
    :hover{
        background-color:#4B84AA;
    }
    :active{
        background-color:#3E6E8E;
    }
`;

export const DivOption = styled.div`
    width:100%;
    height:100px;
`;

export const ButtonOptionLoginCaminhoneiro = styled.button`
    height:70%;
    width:50%;
    border:none;
    outline:none;
    background-color:${props => `${props.backgroundColorCaminhoneiro}`};
    border-top-left-radius:4px;
    border-top-right-radius:4px; 
    color: #474747;
    font-family:'Franklin Gothic Medium';
    font-size:20px;
    cursor: pointer;
    :active{
        background-color:transparent;
    }
    :focus{
        color: #353535;
    }
`;

export const ButtonOptionLoginEmpresa = styled(ButtonOptionLoginCaminhoneiro)`
    background-color:${props => `${props.backgroundColorEmpresa}`};
`;

export const LoginCaminhoneiro = styled.div`
    display: flex;
    flex-direction:column;
    width:72%;
    margin-left:14%;
    margin-right:14%;
    
`;

export const LoginEmpresa = styled.div`
    display: flex;
    flex-direction:column;
    width:72%;
    margin-left:14%;
    margin-right:14%;
`;

export const ForgotPassword = styled.label`
    align-self: flex-end;
    font-size:15px;
    color:grey;
    cursor:pointer;
    text-decoration:underline;
`;

    export const ButtonLogar = styled.button`
    width:100%;
    height:45px;
    border-radius:5px;
    background-color:#6096BA;
    outline:none;
    border:none;
    color:white;
    font-weight:bold;
    :hover{
        background-color:#4B84AA;
    }
    :active{
        background-color:#3E6E8E;
    }
    :focus{
        outline:none;
    }
`;

