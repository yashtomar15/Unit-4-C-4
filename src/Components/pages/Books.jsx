import React from "react";
import { useEffect, useState } from "react";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";
import { AuthContext } from "../context/AuthContext";

export const Grid = styled.div`
//  add required style here
 display:grid;
 grid-template-columns:repeat(2,1fr);
 gap:10px;
`;

const Books = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    fetch('http://localhost:8080/books')
    .then(res=>res.json())
    .then(Data=>setData(Data))
    .catch(error=>console.log(error));

  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          data.map((elm)=>{
            return <BookCard key={elm.id} {...elm} />
          })
          }
      </Grid>
    </>
  );
};
export default Books;
