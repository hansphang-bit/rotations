import axios, { AxiosResponse } from 'axios';
import { processData } from '../utils/apiHelper';

// Function to make a GET request to the 3rd party API
export async function fetchDataFromAPI(): Promise<any> {
  try {
    const apiUrl = "https://sheet.best/api/sheets/320ae98a-498c-4fad-a63e-47a1e3e28bbc/tabs/People";

    // Make a GET request using Axios
    const response: AxiosResponse = await axios.get(apiUrl);

    // Process the response data using helper functions
    const processedData = processData(response.data);

    return processedData; // Return the processed data
  } catch (error) {
    // Handle errors, log them, or throw them for upper layers to handle
    console.error('Error fetching data from API:', error);
    throw error;
  }
}
