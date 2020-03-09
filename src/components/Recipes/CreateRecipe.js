import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { createRecipe } from '../../actions/recipeActions';
import { errorMessage } from '../../actions/alertActions';
import { storage } from '../../config/config';
import Button from '../Button';

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: min-content 10rem 1fr 7rem;
    grid-template-columns: repeat(10, 1fr);
    margin: 10rem 0;
`;

const StyledAlertMessage = styled.div`
    background-color: ${props => props.success ? "var(--color-success)" : "var(--color-error)"};
    grid-row: 1;
    grid-column: 3 / -3;
    margin-bottom: 3rem;
    padding: 1.2rem;
    font-size: 1.7rem;
    justify-items: center;
    font-family: inherit;
    border-radius: 1px;
    text-align: center;
`;

const Heading = styled.h2`
    grid-column: 4 / 6;
    grid-row: 2 / 3;
    margin-left: 8rem;
    align-self: center;
    color: var(--color-grey);
    z-index: 100;
`;

const StyledForm = styled.form`
    grid-column: 3 / -4;
    grid-row: 3;
    box-shadow: 0 3px 10px #ccc;
    border: 1px solid #eee;
    padding: 1rem;
    box-sizing: border-box;
    z-index: 100;
    background-color: white;
`;

const Rectangle = styled.div`
    grid-column: 4 / 9;
    grid-row: 2 / -1;
    background-color: var(--color-primary);
    z-index: 20;
`;

const Input = styled.input`
    outline: none;
    border: 1px solid var(--color-primary-light);
    border-radius: 1px;
    background-color: white;
    padding: 1rem;
    margin: 3rem auto;
    display: block;
    width: 90%;
    box-sizing: border-box;
    transition: 0.2s;

    ::placeholder {
        color: #bbb;
        font-family: inherit;
    }

    :focus {
        border: 1px solid var(--color-primary-light);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 3px rgba(247, 220, 89, .6);
    }
`;

const TextArea = styled.textarea`
    outline: none;
    border: 1px solid var(--color-primary-light);
    background-color: white;
    padding: 1rem;
    display: block;
    width: 90%;
    max-width: 90%;
    min-height: 10rem;
    box-sizing: border-box;
    margin: 3rem auto;
    border-radius: 1px;

    ::placeholder {
        color: #bbb;
        font-family: inherit;
    }
    :focus {
        border: 1px solid var(--color-primary-light);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 3px rgba(247, 220, 89, .6);
    }
`;

const ImageUploadingBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 3.5rem;
`;

const SelectImageInput = styled.input`
    display: none;
`;

const UploadedImage = styled.img`
    width: 7rem;
    height: 7rem;
`;

const SelectImageButton = styled.label`
    background-color: var(--color-primary-light);
    border: none;
    display: inline-block;
    color: var(--color-grey);
    outline: none;
    cursor: pointer;
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
    align-self: center;
    transition: all 0.2s;

    :hover {
        background-color: var(--color-primary);
        font-weight: 600;
    }
`;

const Progress = styled.progress`
    display: block;
    width: 30rem;
    margin: auto;
    background: white;
    border: 1px solid #e0e1e2;

    ::-moz-progress-bar {
        background: var(--color-primary-light);

    }

    ::-webkit-progress-bar {
        background: transparent;
    }
    ::-webkit-progress-value {
        background: var(--color-primary-light);
    }
`;

const initialRecipe = {
    name: '',
    ings: '',
    directions: '',
    imageURL: ''
}

const CreateRecipe = () => {
    const [recipe, setRecipeItem] = useState(initialRecipe);
    const [progress, setProgress] = useState(0);
    const dispatch = useDispatch();
    const alert = useSelector(state => state.alertReducer);

    const inputHandler = event => {
        let name = event.target.name;
        let value = event.target.value;
        setRecipeItem(prevState => {
            return {
                ...prevState,
                [name]: value
        }});
    };

    const changeImageHandler = event => {
        if (event.target.files[0]) {
            const image = event.target.files[0];

            uploadHandler(image);
        }
    }

    const uploadHandler = (image) => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
        (snapshot) => {
            // progrss function ....
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(progress);
        },
        (error) => {
            // error function ....
            console.log(error);
        },
        () => {
            console.log('finished...')
            // complete function ....
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
                setRecipeItem(prevState => {
                    return {
                        ...prevState,
                        imageURL: url
                }});
            })
        });
    }

    const submitHandler = event => {
        event.preventDefault();
        if (recipe && recipe.name && recipe.ings && recipe.directions) {
            window.scrollTo(0, 0);
            dispatch(createRecipe(recipe));
        } else {
            window.scrollTo(0, 0);
            dispatch(errorMessage("Please fill all the fields"));
        }
        setRecipeItem(initialRecipe);
    };

    return (
        <Wrapper>
            {alert.message && (alert.type === "success" ?
                <StyledAlertMessage success>{alert.message}</StyledAlertMessage> : <StyledAlertMessage>{alert.message}</StyledAlertMessage>)
            }
            <Heading>Create recipe</Heading>

            <StyledForm onSubmit={submitHandler}>
                <Input type="text" name='name' value={recipe.name} onChange={inputHandler} placeholder="Recipe name"/>
                <TextArea type="text" name='ings' value={recipe.ings} onChange={inputHandler} placeholder="Ingredients"/>
                <TextArea type="text" name='directions' value={recipe.directions} onChange={inputHandler} placeholder="Cooking instructions"/>
                <ImageUploadingBox>
                    <UploadedImage src={recipe.imageURL || 'https://react.semantic-ui.com/images/wireframe/image.png'} />
                    <Progress value={progress} max="100"/>
                    <SelectImageButton>
                         <SelectImageInput type="file" onChange={changeImageHandler}/>Upload image
                    </SelectImageButton>
                </ImageUploadingBox>
                <Button margin="3rem auto" type="submit">Create recipe</Button>
            </StyledForm>
            <Rectangle />
        </Wrapper>
    )
}

export default CreateRecipe;