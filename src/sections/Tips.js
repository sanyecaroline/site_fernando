import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Title from '../components/Title';
import tipsItens from '../consts/tipItens';
import { mobile, miniPhone } from '../utils/media';
import Modal from './Modal';

const DivContainer = styled.div`    
  height: 550px;
  padding-top: 20px;
  padding-bottom: 20px;
  ${mobile(css`
    height: 1000px;
  `)};
`;

const DivTitle = styled.div`
  margin-bottom: 40px;
  display: block;
`;

const Divs = styled.div`
  width: 100%;  
  max-width: 1060px;
  margin: 0 auto;
  z-index: 3;
  height: 400px; 
  background: transparent;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
`;

const Item = styled.div`
  width: 500px;
  height: 180px;
  display: flex;
  flex-direction: row;
`;

const SubItemImage = styled.div`
  width: 150px;
  height: 150px;
  ${mobile(css`
    padding-left: 10px;
    width: 100px;
  `)};
  ${miniPhone(css`
    width: 50px;
  `)}
`;

const SubItem = styled.div`
  width: 300px;
  height: 180px;
  padding-left: 50px;
  ${mobile(css`
    width: 150px;
    padding-left: 70px;
  `)};
`;

const SubItemText = styled.p`
  color: ${props => props.theme.pallete.primary.main};
`;

const SubItemLink = styled.a`
  color: ${props => props.theme.pallete.secondary.main};
  cursor: pointer;
`;

const Separator = styled.hr`
  background-color: ${props => props.theme.pallete.primary.main};
  width: 60px;
  height: 5px;  
`;

class Tips extends Component {

  state = { 
    show: false, 
    text: '', 
    completeText: '', 
    image: ''    
  }

  showModal = (key) => {            
    this.setState({ show: true, 
                    text: tipsItens[key].text,
                    completeText : tipsItens[key].completeText,
                    image : tipsItens[key].image });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  renderTips() {
    return Object.keys(tipsItens).map(key => (
      <Item key={key}>
        <SubItemImage>
          <img src={tipsItens[key].image} alt={tipsItens[key].alt}/>
        </SubItemImage>
        <SubItem>
          <SubItemText>
            {tipsItens[key].text}
            <SubItemLink onClick={() => this.showModal(key)} >[...] Saiba mais</SubItemLink>
          </SubItemText>
        </SubItem>
      </Item>       
    ))
  }

  render(){
    const { text, completeText, image, show } = this.state;

    return (  
      <DivContainer id="tips">       
        <DivTitle>
          <Title>
            Dicas sobre os Alinhadores Dentários Invisalign          
          </Title>  
          <Separator />
        </DivTitle> 
        <Divs>  
        <Modal show={show} 
                        handleClose={this.hideModal} 
                        text={text}
                        completeText={completeText}
                        image={image}
                        >                   
        </Modal>
        {this.renderTips()} 
        </Divs>      
      </DivContainer>                      
    );
  }

}

export default Tips;