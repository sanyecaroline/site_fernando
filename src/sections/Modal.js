import React from "react";
import styled, { css } from 'styled-components';
import CloseImage from '../media/images/close.svg';

const DivModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 25;
  display: ${props => props.show ? 'block' : 'none'};
`;

const ModalMain = styled.section`
  position:fixed;
  background: white;
  width: 50%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  max-width: 500px;
  text-align: center;
  padding: 30px;
`;

const Avatar = styled.div`
  text-align: center;
`;

const AvatarImg = styled.img`
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #ffffff;
  width: 100px;
  height: 100px;
  border-radius: 50%;   
`;

const ModalTitle = styled.div`
  border-bottom: 1px solid rgba(33, 39, 57, 0.15);
  margin-top: 20px;
  padding-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.8em;
  text-align: center;
  color: ${props => props.theme.pallete.secondary.main};
`;

const ModalText = styled.div`
  margin-top: 20px; 
  text-align: left;
  padding: 0px 0px 30px;
  font-size: 0.9em;
  color: ${props => props.theme.pallete.primary.main};   
`;

const MbClose = styled.button`
  display: block;
  margin: 0 auto;
  font-size: 1em;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
`;

const MbCloseImg = styled.img`
  width: 30px;
  height: 30px;
`;

const Modal = ({ handleClose, show, text, completeText, image }) => { 

  return (
    <DivModal show={show}>
        <ModalMain>
            <Avatar>
              <AvatarImg src={image}                    
                         alt={text}                    
              />
            </Avatar>
            <ModalTitle>
              <strong>{text}</strong>                
            </ModalTitle>
            <ModalText>
                {completeText}
            </ModalText>
            <MbClose onClick={handleClose}>
                <MbCloseImg src={CloseImage} alt="Fechar" />                
            </MbClose>            
      </ModalMain>
    </DivModal>
  );
};

export default Modal;
