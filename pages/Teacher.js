// HomeScreen.js

import React, {useState, useEffect, useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Tables from '../component/Tables';
import InputeFields from '../component/InputeFields';
import Heading from '../component/Heading';
import { AuthContext } from '../utility/AuthContext';
import axios from "axios"
import { BASE_URL } from '../redux/constants';


  
const Teacher = () => {
  const {logOut, userToken="jbhjvjvjgh"} = useContext(AuthContext);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(100);
  const [studentData, setStudentData] = useState([])

    const handleRowPress = (rowData) => {
        navigation.navigate('DetailScreen', { rowData });
      };

      const teacherListFunc = async () => {
        try {
          const response = await axios.post(
            `${BASE_URL}/teacher/get_teachers_list`,
            {
              offset,
              limit,
            },
            {
              headers: {
                Authorization: `Bearer ${userToken}` 
              }
            }
          );
          setStudentData(response?.data);
        } catch (error) {
          console.log(error);
        }
      };

    const data = [
      { id: 1, name: 'Item 1', description: 'Description for Item 1', sr: 1, },
      { id: 2, name: 'Item 2', description: 'Description for Item 2', sr: 2, },
      { id: 1, name: 'Item 1', description: 'Description for Item 1', sr: 1, },
      { id: 2, name: 'Item 2', description: 'Description for Item 2', sr: 2, },
      { id: 1, name: 'Item 1', description: 'Description for Item 1', sr: 1, },
      { id: 2, name: 'Item 2', description: 'Description for Item 2', sr: 2, },
      { id: 1, name: 'Item 1', description: 'Description for Item 1', sr: 1, },
      { id: 2, name: 'Item 2', description: 'Description for Item 2', sr: 2, },
      { id: 1, name: 'Item 1', description: 'Description for Item 1', sr: 1, },
      { id: 2, name: 'Item 2', description: 'Description for Item 2', sr: 2, },
    ];

    const columns = [
      { accessor: 'name', header: 'Name', },
      { accessor: 'description', header: 'Description' },
      { accessor: 'sr', header: 'sr' },
    ];


      useEffect(()=>{
        teacherListFunc()
      }, [offset, limit, userToken])

      console.log("setStudentData", studentData?.body      )

      const renderRowActions = [
        {
          label: 'View',
        //   onPress: row => {
        //     handleEditAction(row?.teacher_id)
        //   },
        //   onPress={() => handleEditAction(item)}
        },
        {
          label: 'Edit',
        //   onPress: row => {
        //      editHandler(row?.teacher_id)
        //   },
        },
        {
          label: 'Delete',
        //   onPress: row => {
        //     deleteHandler(row?.teacher_id, row?.status)
        //   },
        },
      ];

    //   const renderRowActions = (item) => {
    //     return (
    //       <View style={styles.actionButtons}>
    //         <TouchableOpacity
    //           style={styles.actionButton}
    //           onPress={() => handleEditAction(item)}>
    //           <Text>Edit</Text>
    //         </TouchableOpacity>

    //         <TouchableOpacity
    //           style={styles.actionButton}
    //           onPress={() => handleDeleteAction(item)}>
    //           <Text>Delete</Text>
    //         </TouchableOpacity>
            
    //         <TouchableOpacity
    //           style={styles.actionButton}
    //           onPress={() => handleDetailAction(item)}>
    //           <Text>Detail</Text>
    //         </TouchableOpacity>
    //       </View>
    //     );
    //   };

      const handleEditAction = (item) => {
        
      };
    
      const handleDeleteAction = (item) => {
        
      };
    
      const handleDetailAction = (item) => {
        
      };
      
  return (
    <View style={styles.container}>
        <Heading title="Teacher List" />
        <Tables
            data={data}
            columns={columns}
            onRowPress={handleRowPress}
            renderRowActions={renderRowActions}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical:20,
    paddingHorizontal:20,
  },
});

export default Teacher;
