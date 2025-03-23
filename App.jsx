import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Sidebar from '../Components/Sidebar';
import { useState } from 'react';
import PostListProvider from '../Store/PostList-Store';
import { Outlet } from 'react-router-dom';


function App() {
 const [selectedTab,setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
    <div className='app-container'>
    <Sidebar/>
    <div className='content'>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
    </div>
    </PostListProvider>
  );
}
export default App;
