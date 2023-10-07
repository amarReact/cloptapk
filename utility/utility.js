import React, { useState } from 'react'
import axios from "axios"
import { BASE_URL } from '../redux/constants';

export const toketSetup = async () => {
    
    const loginData = await axios.post(`${BASE_URL}/login`, {
        email: 'monu@gmail.com',
        password: '123456',
        school_id: 58,
      });



  return {loginData}
}
