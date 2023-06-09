import React, { useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import api from '../environment/data'

function Home()
{
    // const getData = async () =>
    // {
    //     const res = await api.get("/users")
    //     console.log(res)
    // }

    useEffect(()=> {
      //  getData();
    })
    return(
        <>
        <Header/>
        <p>Home in progress</p>
        <Footer/>
        </>
    )
}

export default Home;