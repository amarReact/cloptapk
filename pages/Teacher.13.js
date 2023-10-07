import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Tables from '../component/Tables';
import InputeFields from '../component/InputeFields';
import Heading from '../component/Heading';
import { AuthContext } from '../utility/AuthContext';
import axios from "axios";
import { BASE_URL } from '../redux/constants';
import UseModal from '../component/UseModal';
import AddTeacher from '../pageComponent/teacher/AddTeacher';
import Buttons from '../component/Buttons';
import EditTeacher from '../pageComponent/teacher/EditTeacher';

const ModalContent = ({ closeModal }) => (
  <View >
    <Text>This is some content inside the modal.</Text>
    <TouchableOpacity onPress={closeModal}>
      <Text style={styles.closeButton}>Close Modal</Text>
    </TouchableOpacity>
  </View>
);

const Teacher = () => {
  const { logOut, userToken } = useContext(AuthContext);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(100);
  const [studentData, setStudentData] = useState([]);
  const { showModal, hideModal, ModalComponent } = UseModal();

  const handleRowPress = (rowData) => {
    navigation.navigate('DetailScreen', { rowData });
  };

  const teacherListFunc = async () => {
    try {

      const logdata = await axios.post(`${BASE_URL}/login`, {
        email: 'monu@gmail.com',
        password: '123456',
        school_id: 58,
      });
      const responseData = logdata?.data;


      const response = await axios.post(
        `${BASE_URL}/transport/get_transport_list`,
        {
          offset,
          limit,
        },
        {
          headers: {
            Authorization: `Bearer ${responseData?.body?.token}`
          }
        }
      );
      setStudentData(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const data = studentData?.body?.map((item, ind) => {
    return {  sr_no: ind+1,  transport_id: item?.transport_id, vehicle_type: item?.vehicle_type, vehicle_number: item?.vehicle_number, driver_name: item?.driver_name, driver_phone: item?.driver_phone, helper_name: item?.helper_name, helper_phone: item?.helper_phone, live_tracking: item?.live_tracking, status: item?.status, school_id: item?.school_id, route_number: item?.route_number   }
  });

  const columns = [
    { accessor: 'sr_no', header: 'SR. No.'},
    { accessor: 'driver_name', header: 'Driver Name' },
    { accessor: 'transport_id', header: 'Transport ID' },
    { accessor: 'vehicle_type', header: 'Vehicle Type' },
    { accessor: 'live_tracking', header: 'Live Tracking' },
    { accessor: 'status', header: 'status' },
  ];

  useEffect(() => {
    teacherListFunc();
  }, [offset, limit, userToken]);

  const renderRowActions = [
    {
      label: 'View',
      onPress: row => {
        handleViewAction(row);
      },
    },
    {
      label: 'Edit',
      onPress: row => {
        handleEditAction(row);
      },
    },
    {
      label: 'Delete',
      onPress: row => {
        handleDeleteAction(row);
      },
    },
  ];

  const handleEditAction = (item) => {
    showModal(
      <EditTeacher closeModal={hideModal} />
    );
  };

  const handleDeleteAction = (item) => {
    showModal(
      <ModalContent closeModal={hideModal} />
    );
    console.log("Delete item:", item);
  };

  const handleViewAction = (item) => {
    console.log("View item:", item);
  };

  const addHandler=()=>{
    showModal(
      <AddTeacher closeModal={hideModal} />
    );
  }

  return (
    <View style={styles.container}>
       <View style={styles.headingParent}>
       <Heading title="Teacher List" />
       <View style={styles.btnList}>
          <Buttons size="small" title="Add Teacher" onPress={()=> addHandler()} />
       </View>
       </View>
     
      {data && <Tables
        data={data}
        columns={columns}
        onRowPress={handleRowPress}
        renderRowActions={renderRowActions}
      />}
      <ModalComponent /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  headingParent:{
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  btnList:{
    width:150,
    marginBottom:20
  }
});

export default Teacher;
