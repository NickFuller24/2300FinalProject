import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import PostForm from './PostForm/PostForm';
import SavedPage from './SavedPage/SavedPage';
import FileExpanded from './FileExpanded/FileExpanded';
import NavBar from './NavBar/NavBar';
import Header from './Header/Header';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/post" element={<PostForm />}/>
        <Route path="/saved" element={<SavedPage />} />
        <Route path="/file/:id" element={<FileExpanded />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
