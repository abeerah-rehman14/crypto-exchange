import React, { useEffect } from 'react';
import Header from './header';
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
        <p>Home is in progress</p>
        </>
    )
}

export default Home;