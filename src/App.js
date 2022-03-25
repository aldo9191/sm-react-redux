import React from "react";
import { css, Global } from "@emotion/react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

const cssGlobal=css`
  *{
    margin:0;
    padding:0;
  }
`


function App() {
  return (
    <main>
      <Global styles={cssGlobal}/>
        <Container>
          <Header/>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
          </Router>
        </Container>
      </main>
  )
}

export default App;

const Container = styled.div``;