import {Manager} from './manager';

export interface BacklogStatus {
  id: number;
  name: string;
}

export interface StatusModule {
  getStatuses(): Promise<BacklogStatus[]>;
}

export class StatusManager extends Manager implements StatusModule {
  async getStatuses(): Promise<BacklogStatus[]> {
    try {
      const res = await this.axios.get('statuses');

      return res.data;
    } catch (err) {
      throw new Error(err.response.data.errors[0].message);
    }
  }
}
