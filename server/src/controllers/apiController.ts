import { Request, Response } from 'express'; // If you're using Express.js

import { fetchDataFromAPI } from '../services/apiService';

// Controller function to handle incoming requests
export async function getAPIData(req: Request, res: Response): Promise<void> {
  try {
    // Call the service function to fetch data from the API
    const data = await fetchDataFromAPI(); // Pass necessary API configuration here

    // Send the fetched data in the response
    res.status(200).json(data);
  } catch (error) {
    // Handle errors and send an error response
    console.error('Error in fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
