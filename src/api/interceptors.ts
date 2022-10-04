import axios from 'axios';
import { toast } from 'react-toastify';

import { api } from './client';

api.interceptors.response.use(
  response => response,
  error => {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);

      toast.error(`Network error occurred: ${error.message}`);

      return error.message;
    } else {
      toast.error(`Unexpected error occurred: ${error}`);
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
);
