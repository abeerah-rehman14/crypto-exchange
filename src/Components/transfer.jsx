import React, { useState, useEffect }  from 'react';
import api from '../environment/data'
import {useSelector,useDispatch} from 'react-redux'
import { Button, Form, Space , message, Select, InputNumber } from 'antd';
import { updateLoginUser } from '../reduxToolkit/loginUserReducer';


function Transfer()
{
    const dispatch = useDispatch();


    const [messageApi, contextHolder] = message.useMessage();
    const key = 'updatable';
    const [form] = Form.useForm();
    const [userData,setUserData] = useState({})
    const [coinData,setCoinData] = useState([])
    const [transferAddress,setTransferAddress] = useState([])
    const [maxAmount,setMaxAmount] = useState(0)
    
    const { loginUser } = useSelector((state)=>state.loginUserReducer)

    
    const getData = async () =>
    {
     

        setCoinData(loginUser.coins.map((data,i)=>{
            return {
                label:data.label,
                value:data.id,
                totalAmount:data.totalAmount
            }
        })) 
        setTransferAddress(loginUser.transferAddress.map((data,i)=>{
            return {
                label:data.label,
                value:data.key
            }
        })) 

    }

     useEffect(()=>{
       getUsersData()
       getData()
    },[])

    const getUsersData =async () =>{
      const res = await api.get("/users")
      setUserData(res.data)
    }

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
        console.log(loginUser)

        loginUser?.coins?.map((data)=>{
          if(data.id === selectedCoin.coinId)
          {
            console.log(data)
           data.totalAmount = data.totalAmount - selectedCoin.amount
          }
        })

        userData[selectedCoin.addressId].coins.map((data)=>{
           if(data.id === selectedCoin.coinId)
           {
            data.totalAmount = data.totalAmount + selectedCoin.amount
           }
         })
        
       
       const response = await api.put(`/users/${loginUser.id}`, loginUser);
       dispatch(updateLoginUser(loginUser))
       console.log(response)

       const res = await api.put(`/users/${selectedCoin.addressId}`, userData[selectedCoin.addressId]);
       console.log(res)


       if(res.status === 200)
       {
        openMessage()
        form.resetFields()
       }

      };

      const onReset = () => {
        form.resetFields();
      };

      const openMessage = () => {
        messageApi.open({
          key,
          type: 'loading',
          content: 'Loading...',
        });
        setTimeout(() => {
          messageApi.open({
            key,
            type: 'success',
            content: 'Your coins have been transfered successfully!',
            duration: 6,
          });
        }, 500);
      };

   

    
    return(
        <>
        {contextHolder}

      
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

        <Form.Item label="Amount">
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
    


        </>
    )
}

export default Transfer;