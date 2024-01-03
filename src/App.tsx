import React, { useEffect, useState } from 'react';
import './App.css';
import { Home } from './pages/home/Home';
import { Courses } from './pages/courses/Courses';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import axios from 'axios';
import { Aboutme } from './pages/aboutme/Aboutme';
import { NavbarRaw } from './components/navbarRaw/NavbarRaw';
import { Profile } from './pages/profile/Profile';
import { Course } from './pages/course/Course';
import { Policy } from './pages/policy/Policy';
import { PageNotFound } from './pages/pagenotFound/PageNotFound';
import { Footer } from './components/footer/Footer';

// const ROUTES = [
//   {
//     path: '/',
//     sidebarName: 'Home',
//     component: Home,
//   },
//   {
//     path: '/courses',
//     sidebarName: 'Movies',
//     component: Courses,
//   },
// ];

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  const [currency, changeCurrency] = useState('usd');
  const [language, changeLanguage] = useState('en');

  const changeLang = (lang: string) => {
    changeLanguage(lang);
  };

  // useEffect(() => {
  //   axios
  //     .get('https://cut-or-die-api.onrender.com/api/v1/users/currentUser', {
  //       withCredentials: true,
  //     })
  //     .then((response) => console.log(response))
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    fetch('https://cut-or-die-api.onrender.com/api/v1/users/currentUser', {
      method: 'GET', // or 'POST', 'PUT', etc.
      credentials: 'include', // this will include cookies
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'fail') {
          setLoggedIn(false);
        } else {
          setLoggedIn(true);
        }
        console.log(data);
        setUserData(data.data.user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className='App'>
      <NavbarRaw
        language={language}
        loggedIn={loggedIn}
        changeLogin={setLoggedIn}
      />
      <BrowserRouter>
        <Routes>
          {/* {ROUTES.map((route: any) => (
            <Route
              path={route.path}
              key={route.path}
              element={<route.component />}
            ></Route>
          ))} */}
          <Route
            path='/'
            element={<Home language={language} currency={currency} />}
          ></Route>
          <Route
            path='/courses'
            element={<Courses language={language} currency={currency} />}
          ></Route>

          <Route
            path='/aboutme'
            element={<Aboutme language={language} />}
          ></Route>
          <Route
            path='/profile'
            element={
              <Profile
                changeLogin={setLoggedIn}
                user={userData}
                language={language}
                changeLangHandler={changeLang}
                currency={currency}
                changeCurr={changeCurrency}
              />
            }
          ></Route>
          <Route
            path='/courses/course'
            element={<Course language={language} />}
          ></Route>
          <Route
            path='/policy'
            element={<Policy language={language} />}
          ></Route>
          <Route
            path='/404'
            element={<PageNotFound language={language} />}
          ></Route>
        </Routes>
      </BrowserRouter>
      <Footer
        language={language}
        changeLangHandler={changeLang}
        currency={currency}
        changeCurr={changeCurrency}
        bottomShadow={false}
      />
    </div>
  );
}

export default App;
