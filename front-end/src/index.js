import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import PostForm from './PostForm/PostForm';
import SavedPage from './SavedPage/SavedPage';
import FileExpanded from './FileExpanded/FileExpanded';
import Header from './Header/Header';
import Login from './Login/Login';
import CreateAccount from './CreateAccount/CreateAccount';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/post" element={<PostForm />}/>
        <Route path="/saved" element={<SavedPage />} />
        <Route path="/file/:id" element={<FileExpanded />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
