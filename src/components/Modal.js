import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const StyledModal = styled.div`
    backdrop-filter: blur(5px);
    background-color: var(--color-grey-light);
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    visibility: ${props => props.show ? "visible" : "hidden"};
`;

const StyledModalBox = styled.div`
    position: absolute;
    width: 60%;
    position: fixed;
    background-color: white;
    border-radius: 1px;
    box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
    box-sizing: border-box;
    left: 20%;
    top: 30%;
    opacity: 1;
    z-index: 10000;
    overflow: hidden;
`;

const ModalName = styled.h2`
    background: var(--color-primary);
    padding: 1.5rem;
    margin: 0;
`;

const ModalContent = styled.div`
    padding: 1rem;
`;

const ModalIngs = styled.div`
    padding: 1rem;
`;

const ModalDirections = styled.div`
    padding: 1rem;
`;

const ModalActions = styled.div`
    display: flex;
`;

const Modal = (props) => {
    return (
        <StyledModal show={props.show}>
            <StyledModalBox >
                <ModalName>{props.name}</ModalName>
                <ModalContent>{props.content}</ModalContent>
                <ModalActions>
                    <Button onClick={props.closeHandler}>Close</Button>
                </ModalActions>
            </StyledModalBox>
        </StyledModal>
    )
}

export default Modal;
