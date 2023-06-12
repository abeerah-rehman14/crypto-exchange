
import React, { useEffect , useState }from 'react';
import { Table, Button, Modal , Form, Input, Alert, Space} from 'antd';
import { ExclamationCircleFilled,PlusCircleOutlined, EyeTwoTone, DeleteOutlined, EditOutlined } from '@ant-design/icons';
const { confirm } = Modal;

const data = [
  {
    key: 1,
    title: 'Alt coins',
    author: 'Jim Green',
    subTitle: 'Altcoin refers to any alternative cryptocurrency to Bitcoin.',
  },
  {
    key: 2,
    author: 'Joe Black',
    title: 'Bitcoin Mining',
    subTitle: 'What it is? How does it work?',
  },
  {
    key: 3,
    author: 'John Wick',
    title: 'Cointelegraph',
    subTitle: 'Trending topics of the crypto world',
  },
  {
    key: 4,
    author: 'Alex Ben',
    title: 'Coinbound',
    subTitle: 'Crypto digital marketing',
  },
  {
    key: 5,
    author: 'Bobby Ong ',
    title: 'CoinGecko',
    subTitle: 'What it is? How does it work?',
  },
];

function Blogs()
{

    let item =  {
        key: 0,
        author: '',
        title: '',
        subTitle: '',
      }

    const [form] = Form.useForm()  
    const [blogData,setBlogData] = useState(data)
    const [selectedItemData, setSeletedItemData] = useState(item)
    const [selectedEditItemData, setSelectedEditItemData] = useState(item)
    const [viewModal,setViewModal] = useState(false)
    const [addModal,setAddModal] = useState(false)
    const [editModal,setEditModal] = useState(false)
    const [successMsg,setSuccessMsg] = useState("")
    const [showAlert,setShowAlert] = useState(false)
    const [successAlert,setSuccessAlert] = useState(false)

    const columns  = [
        {
          title: 'ID',
          dataIndex: 'key',
          key: 'key',
        },
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Sub Title',
          dataIndex: 'subTitle',
          key: 'subTitle',
        },
        {
          title: 'Author',
          dataIndex: 'author',
          key: 'author',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              {/* <a>Invite {record.name}</a> */}
              <Button icon= {<EyeTwoTone />} style={{border: "none"}} onClick={()=> {viewBlog(record)}}></Button>
              <Button icon= {<EditOutlined />} style={{border: "none"}} onClick={()=>{editBlog(record)}}></Button>
              <Button danger icon= {<DeleteOutlined />} style={{border: "none"}} onClick={() => { deleteBlog(record)}}></Button>
            </Space>
          ), //
        },
      ];



      useEffect(() => {
        form.setFieldsValue(selectedEditItemData)
       }, [form, selectedEditItemData, blogData])
     


    const deleteBlog = (record) => {
        confirm({
          title: 'Delete Blog',
          icon: <ExclamationCircleFilled />,
          content: 'Do you really want to delete this blog?',
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          onOk() {
            deleteItem(record);
          },
          onCancel() {
            console.log('Cancel');
          },
        });
    };
    
    const viewBlog = (record) => {
        console.log(record)
        setSeletedItemData(record)
        setViewModal(true)        
    };

    const onCancelView = () =>
    {
        setSeletedItemData(null)
        setViewModal(false)
    };

    const addBlog = () => {
        setAddModal(true)
    }
    const onCloseAddBlogModal = () =>
    {
        setAddModal(false)
    };
    const onFinish = (values) => {
        values.key = Math.floor(Math.random() * 100);
        setBlogData([...blogData,values])
        onCloseAddBlogModal()
        setShowAlert(true)
        setSuccessAlert(true)
        setSuccessMsg("Blog has been added successfully!")
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    const deleteItem = (record) => {
       let filteredData = blogData.filter(data => data.key !== record.key )
       console.log(filteredData)
       setBlogData(filteredData)
    }

    const onClose = (e) => {
        setShowAlert(false)
        setSuccessAlert(false)
        setSuccessMsg("")
      };

    const editBlog = (record) => {
        setSelectedEditItemData(record)
        setEditModal(true)
        console.log(selectedEditItemData,record)
        
    };

    const onCloseEditBlogModal = () =>
    {
        setSelectedEditItemData(null)
        setEditModal(false)
    }

    const onFinishEdit = (record) => {
        console.log(blogData)
        let updatedData = blogData
        let index = updatedData.findIndex(data => data.key === selectedEditItemData.key)
        record.key = selectedEditItemData.key
        updatedData[index] = record
        console.log(updatedData)
        setBlogData(updatedData)
        setEditModal(false)
    }

    const onFinishEditFailed = (errorInfo) => {
        console.log(errorInfo)
    }
    
    
    return(
        <>
        <Button icon = {<PlusCircleOutlined />}  onClick={()=>{addBlog()}}>Add new blog</Button>
        <Table columns={columns} dataSource={[...blogData]} />

        
             <Modal title="Blog details" open={viewModal} onOk={onCancelView} onCancel={onCancelView}>
             <p>Title:  {selectedItemData?.title}</p>
             <p>Sub-Title:  {selectedItemData?.subTitle}</p>
             <p>Author:  {selectedItemData?.author}</p>
            </Modal>

            <Modal title="Add Blog details" open={addModal} onCancel={onCloseAddBlogModal}
            footer={[<Button key="back" onClick={onCloseAddBlogModal}> Cancel</Button>]}>
            <Form
            name="add"
            labelCol={{
            span: 8,
            }}
            wrapperCol={{
            span: 16,
            }}
            style={{
            maxWidth: 400,
            }}
            initialValues={{
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
            <Form.Item
            label="Title"
            name="title"
            rules={[
                {
                required: true,
                message: 'Please enter blog title!',
                },
            ]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Sub title"
            name="subTitle"
            rules={[
                {
                required: true,
                message: 'Please enter sub-title!',
                },
            ]}
            >
            <Input />
            </Form.Item>
            <Form.Item
            label="Author"
            name="author"
            rules={[
                {
                required: true,
                message: 'Please enter author name!',
                },
            ]}
            >
            <Input />
            </Form.Item>
            <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
            >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
        </Form>
            </Modal>

            <Modal forceRender title="Edit Blog details" open={editModal} onCancel={onCloseEditBlogModal}
            footer={[<Button key="back" onClick={onCloseEditBlogModal}> Cancel</Button>]}>
            <Form
            
            form={form}
            name="edit"
            labelCol={{
            span: 8,
            }}
            wrapperCol={{
            span: 16,
            }}
            style={{
            maxWidth: 400,
            }}
            initialValues={selectedEditItemData
            }
            onFinish={onFinishEdit}
            onFinishFailed={onFinishEditFailed}
            autoComplete="off"
            >
            <Form.Item
            label="Title"
            name="title"
            rules={[
                {
                required: true,
                message: 'Please enter blog title!',
                },
            ]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Sub title"
            name="subTitle"
            rules={[
                {
                required: true,
                message: 'Please enter sub-title!',
                },
            ]}
            >
            <Input />
            </Form.Item>
            <Form.Item
            label="Author"
            name="author"
            rules={[
                {
                required: true,
                message: 'Please enter author name!',
                },
            ]}
            >
            <Input />
            </Form.Item>
            <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
            >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
        </Form>
            </Modal>

        {showAlert && (
                  <Space
                  direction="vertical"
                  style={{
                  width: '100%',
                  }}>
                {successAlert &&(
                      <Alert 
                      message={successMsg}
                      type="success"
                      closable
                      onClose={onClose}
                      />
                )}
              </Space>
          )}

        
        </>
    )
    

  


}



export default Blogs;