import React, {useState} from 'react';
import { Input, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { cpfMask } from '../cpfMask/index'; 

import { Navbar, Logo, Button, ButtonLogin, ButtonOptionLoginCaminhoneiro, ButtonOptionLoginEmpresa, DivOption, LoginCaminhoneiro, LoginEmpresa, ForgotPassword, ButtonLogar } from './styles';

function Header() {
  const [optLogin, setOptLogin] = useState(true); 
  const [open, setOpen] = useState(false)

  const [optShow, setOptShow] = useState(true);
  const [inputType, setType] = useState('password');
  const [optIcon, setIcon] = useState('');

  const [cpfCaminhoneiro, setCpf] = useState('');
  const [senhaCaminhoneiro, setSenhaCaminhoneiro] = useState('');
  const [cnpjEmpresa, setCnpj] = useState('');
  const [senhaEmpresa, setSenhaEmpresa] = useState('');

  const [backgroundColorOptCaminhoneiro, setBackgroundCaminhoneiro] = useState('transparent');
  const [backgroundColorOptEmpresa, setBackgroundEmpresa] = useState('#D6EFFF');

  const showHide = () =>{
    if(optShow){
      setIcon('slash');
      setOptShow(false)
      setType('text')
    }else{
      setIcon('');
      setOptShow(true)
      setType('password')
    }
  }

  const auxCam = () =>{
    setOptLogin(true);
    changeColor(true);
  }

  const auxEmp = () =>{
    setOptLogin(false);
    changeColor(false);
  }

  const changeColor = (opt) =>{
    if(opt){
        setOptLogin(true);
        setBackgroundCaminhoneiro('transparent');
        setBackgroundEmpresa('#D6EFFF');
      }
      else{
        setOptLogin(false);
        setBackgroundEmpresa('transparent');
        setBackgroundCaminhoneiro('#D6EFFF');
      }
  }

  const switchOptLogin = () =>{
    return(
      optLogin ? (
        <LoginCaminhoneiro>
          <Input size="large" value={cpfCaminhoneiro} onChange={(e) =>{ setCpf(cpfMask(e.target.value)); }} icon='id card' iconPosition='left' placeholder='123.456.789-10' />
          <br />
          <br />
          
          <div class="ui large left icon input">
            <input id='senhaCaminhoneiro' value={senhaCaminhoneiro} type={inputType} onChange={(t) =>{setSenhaCaminhoneiro(t.target.value);}} placeholder="Senha"/>
            <i onClick={showHide} aria-hidden="true" class={'eye '+optIcon+' circular link icon'}></i>
          </div>
          
          <ForgotPassword onClick={() =>{alert('Esqueci minha Senha.')}}>Esqueci minha senha.</ForgotPassword>
          <br />
          <br />
          <ButtonLogar>Entrar</ButtonLogar>
          <br />
          <br />
          <br />
        </LoginCaminhoneiro>
       ) : (
        <LoginEmpresa>
          <Input size="large" value={cnpjEmpresa} onChange={(e) =>{ setCnpj(cpfMask(e.target.value)); }} icon='id card' iconPosition='left' placeholder='12.345.678/1234-56' />
          <br />
          <br />
          
          <div class="ui large left icon input">
            <input id='senhaEmpresa' value={senhaEmpresa} type={inputType} onChange={(t) =>{setSenhaEmpresa(t.target.value);}} placeholder="Senha"/>
            <i onClick={showHide} aria-hidden="true" class={'eye '+optIcon+' circular link icon'}></i>
          </div>
          
          <ForgotPassword onClick={() =>{alert('Esqueci minha Senha.')}}>Esqueci minha senha.</ForgotPassword>
          <br />
          <br />
          <ButtonLogar>Entrar</ButtonLogar>
          <br />
          <br />
          <br />
            

        </LoginEmpresa>
       )
    );
  }

  return(
    <Navbar>
      <Logo src={require('../../images/CPTruck Logo F.jpg')} alt="Logo"/>
      <Button>Contate-nos</Button>
      <Button>Cadastre-se</Button>
      <ButtonLogin onClick={()=>{setOpen(true)}}>Entrar</ButtonLogin>

        <Modal
          centered={false}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          size='tiny'
        >

          <DivOption>

            <ButtonOptionLoginCaminhoneiro backgroundColorCaminhoneiro={backgroundColorOptCaminhoneiro} onClick={() => auxCam()}>
              Caminhoneiro
            </ButtonOptionLoginCaminhoneiro>
            
            <ButtonOptionLoginEmpresa backgroundColorEmpresa={backgroundColorOptEmpresa} onClick={() => auxEmp()} >
              Empresa
            </ButtonOptionLoginEmpresa>
            
          </DivOption>
          {switchOptLogin()}
            
        </Modal>
        
    </Navbar>
  );
}

export default Header;