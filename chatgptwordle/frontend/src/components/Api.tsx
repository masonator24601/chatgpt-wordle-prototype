import React from 'react';
import axios from 'axios';

export const getResponses = async () => {
    await new Promise(r => setTimeout(r, 1000));
    return axios.get('/api/responses')
}