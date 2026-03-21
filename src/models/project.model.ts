export interface IProject {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  color: string;
  short: string;
  totalIssues: number;
  totalComments: number;
  totalUsers: number;
  totalAttachments: number;
}