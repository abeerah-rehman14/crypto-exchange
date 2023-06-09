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
    
    useSelector(state => console.log(state))
 
     const { user } = useSelector((state)=>state.user)
     const { status } = useSelector((state)=>state.user)

    const dispatch = useDispatch();
    
    const getData = async () =>
    {
        const res = await api.get("/users")
        console.log(res.data[0])
        setCoinData(res.data[0].coins)    
        setCoinLayout()
        console.log(colData)  
    }

    const setCoinLayout = () =>
    {
        //console.log("called")
        for (let i = 0; i < coinData.length; i++) {
            cols.push(
              <Col key={i.toString()} span={24}>
                <Card title={coinData[i].name} size="small">
                    <h6>Total Count</h6>
                    <p>{coinData[i].totalCount}</p>
                    <Button onClick={tranfer} style={{ color: "green"}}>Transfer</Button>
                </Card>
              </Col>
            );
          }
          setColData(cols)
    }

   



    useEffect(()=>{
       getData();
       if(status === "idle")
       {
        dispatch(fetchUserData())
        console.log(user)   
       }
    },[status,dispatch])

    // useEffect( ()=> {
    //     console.log("child comp called")
    //    // getData();
    //    // setCoinLayout();
    // },[])

    const tranfer = () =>
    {
        navigate("/transferCoin")


    }

    return(
        <>
        {/* <p>{user[0]?.name}</p> */}
         {/* <Space
            direction="horizontal"
            size="middle"
            style={{
            display: 'flex',
            }}>  */}
            {/* <Row gutter={[24, 16]}>
                {colData}
            </Row> */}
   
            <Row gutter={[16, 8]}>
            {
             coinData && coinData.map((coin,i)=>{
                return(
                <Col key={i} span={12}> 
                <Card title={coin.name} size="small">
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

export default CoinCard;