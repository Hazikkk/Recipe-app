import React from 'react';
import styled from 'styled-components';
import { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + input);
    };

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <label htmlFor="search"></label>
                <input
                    id="search"
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    value={input}
                    placeholder="Type here..."
                />
            </div>
            <FaSearch />
        </FormStyle>
    )
}

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    position: relative;
    width: 100%;

    div {
        position: relative;
        width: 100%;
    }

    label {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1rem;
        color: #a0a0a0;
    }

    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 2rem;
        border-radius: 1rem;
        outline: none;
        width: 100%;
        text-align: center;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 2%;
        transform: translate(100%, -50%);
        color: white;
    }

    @media (max-width: 768px) {
        input {
            padding: 1rem 1.5rem;
        }

        svg {
            left: 1%;
        }
    }

    @media (max-width: 480px) {
        input {
            padding: 1rem 1rem;
        }

        svg {
            left: 0.5%;
        }
    }
`;

export default Search;
