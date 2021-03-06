import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CloseButton } from '../../assets/svg/close.svg'

const StyledModal = styled.div`
    backdrop-filter: blur(5px);
    background-color: var(--color-grey-light);
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: ${props => props.show ? "block" : "none"};
`;

const Overlay = styled.div`
    z-index: 0;
    height: 100vh;
    width: 100%;
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

    @media (max-width: 550px) {
        width: 80%;
        left: 10%;
        top: 20%;
        max-height: 80%;
    }
`;

const ModalName = styled.h2`
    padding: 1rem;
    padding-right: 3rem;
    margin: 0;
`;

const HeadingBox = styled.div`
    display: flex;
    justify-content: space-between;
    background: var(--color-primary);
    box-shadow: 0 0 1rem rgba(0,0,0,.1);
`;

const StyledIconButton = styled(CloseButton)`
    fill: var(--color-grey);
    cursor: pointer;
    transition: all 0.3s;
    height: 1.7rem;
    position: absolute;
    top: 1.5rem;;
    right: 1rem;
`;

const ModalContent = styled.div`
    padding: 1rem;
    max-height: 35rem;
    overflow: auto;
    @media (max-width: 550px) {
        max-height: 40rem;
    }
`;

const ModalIngs = styled.div`
    padding: 1rem;
`;

const ModalDirections = styled.div`
    padding: 1rem;
`;

const Modal = (props) => {
    return (
        <StyledModal show={props.show} >
            <Overlay onClick={props.closeHandler} />
            <StyledModalBox >
                <HeadingBox>
                    <ModalName>{props.recipe.name}</ModalName>
                    <StyledIconButton onClick={props.closeHandler}/>
                </HeadingBox>
                <ModalContent>
                    <ModalIngs>
                        {props.recipe.ings}
                    </ModalIngs>
                    <ModalDirections>
                        {props.recipe.directions}
                    </ModalDirections>
                </ModalContent>
            </StyledModalBox>
        </StyledModal>
    )
}

export default Modal;
