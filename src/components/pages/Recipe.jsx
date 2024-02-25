import {useEffect , useState}  from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";


import React from 'react'

const Recipe = () => {

    let params  = useParams();
    const [details , setDetails] = useState({});
    const [activeTab , setActiveTab] = useState("instructions");

    const fetchDetails = async () => {
        const data  = await fetch(
            `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData)
    }

    useEffect(()=>{
        fetchDetails()
    },[params.name]);


  return (
    <DetailWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src = {details.image} alt= ""/>
        </div>
        <Info>
            
            <Button className = {activeTab === 'summary' ? 'active': ''} onClick ={()=> setActiveTab("summary")}>Summary</Button>
            <Button className = {activeTab === 'instructions' ? 'active': ''} onClick ={()=> setActiveTab("instructions")}>Instructions</Button>
           
            {activeTab === "instructions" &&(
                    <div>
                     <h4 dangerouslySetInnerHTML={{__html: details.instructions}}></h4>
                   </div>
            )}
            
            {activeTab === "summary" &&(
                    <div>
                    <h4 dangerouslySetInnerHTML={{__html: details.summary}}></h4>
                   </div>
            )}
           
          
            
            <ul>
         
            </ul>
        </Info>
        </DetailWrapper>
  )
}



const DetailWrapper = styled.div`
  margin: 10rem 0 5rem;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: auto;
  }

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2 {
    margin-bottom: 1rem;
  }

  h4 {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  ul {
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    img {
      width: 50%;
    }
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  font-weight: 600;
  margin-right: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const Info = styled.div`
  margin-left: 0;

  @media (min-width: 768px) {
    margin-left: 10rem;
  }
`;





export default Recipe
