import React, { useEffect, useState } from 'react';
import Header from './header';
import Footer from './footer';
import CoinCard from './coinCard';
import { Button, Col, Row, Statistic } from 'antd';
import axios from 'axios';
import api from '../environment/data'
import {useSelector,useDispatch} from 'react-redux'
import {getUser} from '../reduxToolkit/userReducer'
import { fetchUserData } from '../reduxToolkit/userReducer';
import {toolkitStore} from '../reduxToolkit/toolkitStore'
import { Provider } from 'react-redux';

function Dashboard()
{
    // const { user } = useSelector((state)=>state.user)
    // const { status } = useSelector((state)=>state.user)


    const dispatch = useDispatch();


    const [coinRates,setCoinRates] = useState({})
    const [coinDetails,setCoinDetails] = useState([])
    const [coinDetailsLength,setCoinDetailsLength] = useState(0)

    const getLiveCoinData = async () => {
        const response = await api.get("/coins")
        setCoinRates(response.data.rates)

        const res = await axios.get('https://api.binance.com/api/v3/ticker/24hr')
        if(res.status == 200)
        {
            setCoinDetails(res.data)
            setCoinDetailsLength(res.data.length)
        }


    }


    useEffect(()=>{
        // dispatch(getUser())
     getLiveCoinData()
    //    if(status === "idle")
    //    {
    //     dispatch(fetchUserData())
    //     console.log(user)   
    //    }


    },[])


    return(
        <>
        <Header/>
        {/* <p>{user[0]?.name}</p>
        <p>{user[0]?.email}</p> */}
        <Row gutter={16}>
        <Col span={4} offset={6}>
        <Statistic title="BITCOIN" value={coinRates.BTC} precision={2}/>
        </Col>
        <Col span={4}>
        <Statistic title="LITECOIN" value={coinRates.LTC} precision={2} />
        </Col>
        <Col span={4}>
        <Statistic title="ETHEREUM" value={coinRates.ETH} precision={2} />
        <Button style={{ marginTop: 16,}} >
        Refresh
        </Button>
        </Col>
        </Row>

        <Provider store={toolkitStore}>
            <CoinCard></CoinCard>
        </Provider>
        <Footer/>
        </>
    )
}

export default Dashboard;