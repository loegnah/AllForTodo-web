type JobDate = {
  start: Date;
  end: Date;
};

class Job {
  title: string;
  comment: string;
  category: string;
  dates: JobDate[];

  constructor(params: { title: string; comment?: string; category?: string; dates?: JobDate[] }) {
    this.title = params.title;
    this.comment = params.comment || '';
    this.category = params.category || 'default';
    this.dates = params.dates || [];
  }
}

export type { JobDate };
export default Job;
