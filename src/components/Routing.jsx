import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Contact from './Contact'
import Header from './Header'
import Home from './Home'
import MainLayout from './MainLayout'
import PostComponent from './PostComponent'
import Error404 from './Error404'

const Routing = () => {
  return (
    <MainLayout>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/article/:kt" element={<PostComponent />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/404" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
}

export default Routing