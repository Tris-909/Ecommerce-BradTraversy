import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SET_A_REVIEW_AS_AGREE_RESET } from '../../../redux/actions/actionTypes';
import { stickAReviewAsAgree } from '../../../redux/actions/userActions';
import styled from 'styled-components';

const AgreeTextContainer = styled.div`
padding: 0px 10px;
border: none;
margin-left: 1rem;
margin-right: 1rem;
background-color:  #f1f1f1;
cursor: pointer;
font-weight: 700;
color: ${props => props.isAgreeded ? "green" : "black"};

@media (max-width: 420px) {
    margin-left: 0rem;
    margin-top: 0.5rem;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 40%;
}
`;

const AgreeText = ({ numOfAgrees, useAgreeOrDisAgreeArray, reviewID, productID }) => {
    const dispatch = useDispatch();
    const [isAgreeded, setIsAgreeded] = useState(false);

    useEffect(() => {
        for (let i = 0; i < useAgreeOrDisAgreeArray.length; i++) {
            if (useAgreeOrDisAgreeArray[i].reviewId == reviewID && useAgreeOrDisAgreeArray[i].agree) {
                setIsAgreeded(true);
            }
        }
    }, [useAgreeOrDisAgreeArray, reviewID]);
    
    const onClickHandler = (e) => {
        e.preventDefault();
        dispatch({ type: SET_A_REVIEW_AS_AGREE_RESET });
        dispatch(stickAReviewAsAgree(productID, reviewID));
    }

    return (
        <AgreeTextContainer isAgreeded={isAgreeded} onClick={(e) => onClickHandler(e)}>
            Yes . <span>{numOfAgrees}</span>
        </AgreeTextContainer>
    )
}

export default AgreeText;
