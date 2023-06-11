import React, { useEffect, useState } from 'react';
import { Button, Card, Space , Col, Row, Slider  } from 'antd';
import Header from './header';
import Footer from './footer';
import api from '../environment/data'
import {useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from 'react-redux'
import {getUser} from '../reduxToolkit/userReducer'
import { fetchUserData } from '../reduxToolkit/userReducer';

function CoinCard()
{
    const [coinData,setCoinData] = useState([])
    const [colData,setColData] = useState([])
    const navigate = useNavigate()
    const cols = []
    let coins = []
    
    //useSelector(state => console.log(state))
 
    const { loginUser } = useSelector((state)=>state.loginUserReducer)

    const dispatch = useDispatch();
    
    const getData = async () =>
    {
        coins=[]
        loginUser?.coins?.forEach(element => {
             coins.push(element)      
        })
        setCoinData(coins)
    }

    const setCoinLayout = () =>
    {
        for (let i = 0; i < coinData.length; i++) {
            cols.push(
              <Col key={i.toString()} span={24}>
                <Card title={coinData[i].label} size="small">
                    <h6>Total Count</h6>
                    <p>{coinData[i].totalCount}</p>
                    <Button onClick={tranfer(coinData.id)} style={{ color: "green"}}>Transfer</Button>
                </Card>
              </Col>
            );
          }
          setColData(cols)
    }

    useEffect(()=>{
       getData();
    },[])


    const tranfer = () =>
    {
        navigate("/transferCoin")


    }

    return(
        <>
            <Row gutter={[16, 8]}>
            {
             coinData && coinData?.map((coin,i)=>{
                return(
                <Col key={i} span={12}> 
                <Card title={coin.label} size="small" color="blue">
                <h6>Total Count</h6>
                <p>{coin.totalAmount}</p>
                <Button onClick={tranfer} style={{ color: "green" }}>Transfer</Button>
                </Card>
                </Col>    
                )

            }) 
           }
           </Row>


        {/* </Space> */}
        </>
    )
}
export default React.memo(CoinCard);
