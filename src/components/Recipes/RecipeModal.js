import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
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
    padding: 1rem;
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
`;

const ModalIngs = styled.div`
    padding: 1rem;
`;

const ModalDirections = styled.div`
    padding: 1rem;
`;

const ModalActions = styled.div`
    display: flex;
    box-shadow: 0 0 1rem rgba(0,0,0,.1);
`;

const Modal = (props) => {
    return (
        <StyledModal show={props.show}>
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
                <ModalActions>
                    <Button margin="3rem auto" onClick={props.closeHandler}>Close</Button>
                </ModalActions>
            </StyledModalBox>
        </StyledModal>
    )
}

export default Modal;
