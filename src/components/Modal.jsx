import React from "react";
import styled from "styled-components";
import {MdClose} from "react-icons/md"

export const Modal = ({children,status,changeStatus}) => {//falta terminar
    const styleMdClose = {width:"100%", height:"100%"};
  return (
    <>
    { status &&
      <Overlay>
      <ModalContainer>
        <ModalHeader><h3>Update Schedele</h3></ModalHeader>
        <ButtonClose onClick={() => changeStatus(false)}>
          <MdClose style={styleMdClose}/>
          </ButtonClose>
        {children}
      </ModalContainer>
    </Overlay>
    }
    </>
  );
};

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const ModalContainer = styled.div`
  width: 500px;
  min-height: 100px;
  background: #ffffff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
`;

const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 2px solid #E8E8E8;

    h3{
        font-weight: 800;
        font-size: 24px;
        color: #081324;
    }
`

const ButtonClose = styled.div`
    position: absolute;
    display: flex;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: 0.3s ease all;
    border-radius: 5px;
    color: #012d6f;

    align-items: center;
    justify-content: center;

    &:hover{
        background: #3b85f4;
    }

`
