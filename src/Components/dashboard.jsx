import React, { useEffect, useState } from 'react';
import CoinCard from './CoinCard';
import { Button, Col, Row, Statistic ,Table} from 'antd';
import axios from 'axios';
import api from '../environment/data'
import {useSelector,useDispatch} from 'react-redux'
import {getUser} from '../reduxToolkit/userReducer'
import { fetchUserData } from '../reduxToolkit/userReducer';
import {toolkitStore} from '../reduxToolkit/toolkitStore'
import { Provider } from 'react-redux';
import Navbar from "react-bootstrap/Navbar";



function Dashboard()
{
    const columns  = [
        {
          title: 'Name',
          dataIndex: 'symbol',
          key: 'symbol',
        },
        {
          title: 'Price',
          dataIndex: 'openPrice',
          key: 'openPrice',
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.openPrice - b.openPrice,
        },
        {
          title: 'Last Price',
          dataIndex: 'lastPrice',
          key: 'lastPrice',
        },
        {
          title: 'Price Change',
          dataIndex: 'priceChange',
          key: 'priceChange',
        },
      ];
    const dispatch = useDispatch();

    const [coinRates,setCoinRates] = useState({})
    const [coinDetails,setCoinDetails] = useState([])

    const getLiveCoinData = async () => {
        const response = await api.get("/coins")
        setCoinRates(response.data.rates)

        const res = await axios.get('https://api.binance.com/api/v3/ticker/24hr')
        if(res.status == 200)
        {
            setCoinDetails(res.data)
        }
    }


    useEffect(()=>{
     getLiveCoinData()
    },[])


    return(
        <>
      
        <Row gutter={16}>
        <Col span={4} offset={6}>
        <Statistic title="BITCOIN" value={coinRates?.BTC} precision={2}/>
        </Col>
        <Col span={4}>
        <Statistic title="ALTCOIN" value={coinRates?.ALT} precision={2} />
        </Col>
        <Col span={4}>
        <Statistic title="ETHEREUM" value={coinRates?.ETH} precision={2} />
        {/* <Button style={{ marginTop: 16,}} >
        Refresh
        </Button> */}
        </Col>
        </Row>
        <br></br>

        <Navbar.Brand style={{fontSize: "24px",paddingBottom:"20px"}}>Purchased Coins</Navbar.Brand>
        <CoinCard></CoinCard>

        <br></br>
        <Navbar.Brand style={{fontSize: "24px",paddingBottom:"20px"}}>Market Rates</Navbar.Brand> 
        {/* <Button style={{ paddingLeft:"100px"}} >Refresh</Button>        */}
        <Table columns={columns} dataSource={[...coinDetails]} rowKey={record => record.firstId} />

        </>
    )
}

export default Dashboard;