import axios, { AxiosResponse } from 'axios';

class GitHubService {
  private baseUrl: string = 'https://api.github.com';

  async getUser(username: string): Promise<AxiosResponse<any>> {
    try {
        debugger
      const response = await axios.get(`${this.baseUrl}/users/${username}`);
      return response;
    } catch (error) {
      throw new Error(`Error fetching user data: `);
    }
  }
}

export default GitHubService;
