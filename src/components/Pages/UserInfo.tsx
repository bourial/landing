import React, { useState } from 'react';
import { Space, Table, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import moment from 'moment';

const UserInfo: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedrecord] = useState<DataType|null>(null);

  const showModal = (recordKey:any) => {
    setSelectedrecord(recordKey);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getRowClassName = (record: DataType, index:number) => {
    return index % 2 === 0 ? 'even-row' : 'odd-row';
  }

  interface DataType {
    key: string;
    user: string;
    email: string;
    countryOfResidency: string;
    company: string;
    registrationDate: string;
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
      
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Country of residency',
      dataIndex: 'countryOfResidency',
      key: 'countryOfResidency',
    },
    {
      title: 'Company',
      key: 'company',
      dataIndex: 'company',
    },
    {
      title: 'Registration Date',
      key: 'registrationDate',
      dataIndex: 'registrationDate',
      // render: (_, record:any) => (
      //   <span>{moment(record?.registrationDate).format("MM/DD/YYYY")}</span>
      // )
    },
    {
      title: 'Actions',
      key: 'action',
      render: (_, record) => (
        <Space size="middle" onClick={()=>{showModal(record)}}  className='record-onlik'>
            {/* <EyeOutlined/> */}
           <img className='show-icon' src='/images/Show.svg'/>
        </Space>
      ),
    },
  ];
  
  const data: DataType[] = [
    {
      key: '1',
      user: 'John Brown',
      email: 'JhonDoe@gmail.com',
      countryOfResidency: 'New York No. 1 Lake Park',
      company: 'IBM',
      registrationDate: 'December 21, 2024'
    },
    {
      key: '1',
      user: 'John Brown',
      email: 'JhonDoe@gmail.com',
      countryOfResidency: 'New York No. 1 Lake Park',
      company: 'IBM',
      registrationDate: 'December 21, 2024'
    },
    {
      key: '1',
      user: 'John Brown',
      email: 'JhonDoe@gmail.com',
      countryOfResidency: 'New York No. 1 Lake Park',
      company: 'IBM',
      registrationDate: 'December 21, 2024'
    },
    {
      key: '1',
      user: 'John Brown',
      email: 'JhonDoe@gmail.com',
      countryOfResidency: 'New York No. 1 Lake Park',
      company: 'IBM',
      registrationDate: 'December 21, 2024'
    },
    {
      key: '1',
      user: 'John Brown',
      email: 'JhonDoe@gmail.com',
      countryOfResidency: 'New York No. 1 Lake Park',
      company: 'IBM',
      registrationDate: 'December 21, 2024'
    },
    {
      key: '1',
      user: 'John Brown',
      email: 'JhonDoe@gmail.com',
      countryOfResidency: 'New York No. 1 Lake Park',
      company: 'IBM',
      registrationDate: 'December 21, 2024'
    },
    {
      key: '1',
      user: 'John Brown',
      email: 'JhonDoe@gmail.com',
      countryOfResidency: 'New York No. 1 Lake Park',
      company: 'IBM',
      registrationDate: 'December 21, 2024'
    },
    {
      key: '1',
      user: 'John Brown',
      email: 'JhonDoe@gmail.com',
      countryOfResidency: 'New York No. 1 Lake Park',
      company: 'IBM',
      registrationDate: 'December 21, 2024'
    },
    {
      key: '1',
      user: 'John Brown',
      email: 'JhonDoe@gmail.com',
      countryOfResidency: 'New York No. 1 Lake Park',
      company: 'IBM',
      registrationDate: 'December 21, 2024'
    },
  ];

    
return (
    <>
    {/* style={{ padding: '0 2rem' }} */}
        <Table columns={columns} dataSource={data} rowClassName={getRowClassName} pagination= {false}/>

        <Modal title="VIEW USER INFOS" open={isModalOpen} onCancel={handleCancel} footer= {false} className='modal'>
        {
          selectedRecord && (
            <>
            <hr></hr>
              <table >
                <tbody>
                  <tr>
                    <td className='user-records-column'>UserName:</td>
                    <td className='user-records-column'>{selectedRecord.user}</td>
                  </tr>
                  <tr>
                    <td className='user-records-column'>Email:</td>
                    <td className='user-records-column'>{selectedRecord.email}</td>
                  </tr>
                  <tr>
                    <td className='user-records-column'>Country of residency:</td>
                    <td className='user-records-column'>{selectedRecord.countryOfResidency}</td>
                  </tr>
                  <tr>
                    <td className='user-records-column'>Company:</td>
                    <td className='user-records-column'>{selectedRecord.company}</td>
                  </tr>
                  <tr>
                    <td className='user-records-column'>Registration Date:</td>
                    <td className='user-records-column'>{selectedRecord.registrationDate}</td>
                  </tr>
                </tbody>
              </table>
            </>
          )
        }
      </Modal>
    </>
);
};
export default UserInfo;