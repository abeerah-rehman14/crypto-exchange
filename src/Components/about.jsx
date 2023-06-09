import React from 'react';
import Header from './header';
import Footer from './footer';

function About()
{

    return(
        <>
        <Header/>
        <p>This application is build using React Js.
            The major react components used to build this app are
            <li>
                <ul>Redux</ul>
                <ul>Redux Toolkit</ul>
                <ul>Ant design (for all designs,forms)</ul>
                <ul>React Router Dom</ul>
                <ul>React hooks</ul>
            </li>
        </p>
        <Footer/>
        </>
    )
}

export default About;