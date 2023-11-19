import { Request, Response } from 'express';
import GitHubService from '../services/GitHubService';

class UserController {
  private githubService: GitHubService;

  constructor() {
    this.githubService = new GitHubService();
  }

  async getUser(req: Request, res: Response): Promise<void> {
    const username: string = req.params.username;

    try {
      const userData = await this.githubService.getUser(username);
      console.log(userData)
      res.json(userData.data);
    } catch (error) {
      res.status(500).json({ error: error});
    }
  }
}

export default UserController;
