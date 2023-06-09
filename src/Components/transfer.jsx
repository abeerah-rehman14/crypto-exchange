import React, { useState, useEffect }  from 'react';
import Header from './header';
import Footer from './footer';
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import api from '../environment/data'
import { Button, Checkbox, Form, Input, Space , message,  Dropdown, Select, InputNumber} from 'antd';
const { Option } = Select;

function Transfer()
{

    const [form] = Form.useForm();

    const [userData,setUserData] = useState({})
    const [coinData,setCoinData] = useState([])
    const [transferAddress,setTransferAddress] = useState([])
    const [maxAmount,setMaxAmount] = useState(0)
    
    
    const getData = async () =>
    {
        const res = await api.get("/users")
        console.log(res.data[0])

        setUserData(res.data)
        setCoinData(res.data[0].coins.map((data)=>{
            return {
                label:data.name,
                value:data.id,
                totalAmount:data.totalAmount
            }
        })) 
        setTransferAddress(res.data[0].transferAddress.map((data)=>{
            return {
                label:data.name,
                value:data.key
            }
        }))
        console.log(transferAddress) 
        console.log(coinData) 
        console.log(userData)  

    }

     useEffect(()=>{
        getData()
    },[])

     const setCoinMaxLimit = (coinValue)=>{
        let amount  = coinData.find(data => data.value === coinValue ).totalAmount
        setMaxAmount(amount)

    }

    const onFinish = (values) => {
        updateUserHandler(values)
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };


      const updateUserHandler = async (selectedCoin) => {       
        let payload = {}
         userData[0]?.coins?.map((data)=>{
           if(data.id === selectedCoin.coinId)
           {
            data.totalAmount = data.totalAmount - selectedCoin.amount
           }
         })
         payload = userData[0]
         userData[selectedCoin.addressId].coins.map((data)=>{
            if(data.id === selectedCoin.coinId)
            {
             data.totalAmount = data.totalAmount + selectedCoin.amount
            }
          })

         console.log(userData[0].coins, userData[selectedCoin.addressId].coins)
         console.log(payload, selectedCoin.addressId)
        
       
       const response = await api.put(`/users/0`, userData[0]);
       console.log(response)
       const res = await api.put(`/users/${selectedCoin.addressId}`, userData[selectedCoin.addressId]);
       console.log(res)

      };

      const onReset = () => {
        form.resetFields();
      };

   

    
    return(
        <>
        <Header/>
        <Space direction="vertical" size="middle" align='center' style={{ display: 'flex' }} >
        <Form
        form={form}
        name="basic"
        labelCol={{span: 8,}}
        wrapperCol={{span: 16,}}
        style={{maxWidth: 600,}}
        initialValues={{remember: true,}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
    

        <Form.Item
        name="addressId"
        label="Address"
        hasFeedback
        rules={[{ required: true, message: 'Please select Address!' }]}
      
        >
        <Select placeholder="Please select Address"
          options={transferAddress}>
        </Select>
        </Form.Item>

        
        <Form.Item
        name="coinId"
        label="Coin"
        hasFeedback
        rules={[{ required: true, message: 'Please select the coins!' }]}
      
        >
        <Select placeholder="Please select the coins!"
          options={coinData}
          onChange={setCoinMaxLimit}>
        </Select>
        </Form.Item>

        <Form.Item label="Amount"
    

        >
        <Form.Item 
        //  wrapperCol={{
        //     // offset: 8,
        //     // span: 16,
        // }}
        rules={[{ required: true }]}
         label="Amount"name="amount" noStyle>
            <InputNumber min={1} max={maxAmount} />
        </Form.Item>
        {/* {maxAmount  && (
           <span> Limit: {maxAmount}</span>
          )} */}
        </Form.Item>


        <Form.Item
        wrapperCol={{
            offset: 8,
            span: 16,
        }}
        >
        <Button type="primary" htmlType="submit">
            Transfer
        </Button>
        {/* <Button htmlType="button" style={{"margin-right": "2px"}} onClick={onReset}>
          Reset
        </Button> */}
        </Form.Item>
{/*         
        <Form.Item
        wrapperCol={{
            offset: 8,
            span: 16,
        }}
        >
        <Button type="primary" htmlType="submit">
            Transfer
        </Button>
        </Form.Item> */}
        
    </Form>  
    </Space>      
    
  <Footer/>


        </>
    )
}

export default Transfer;