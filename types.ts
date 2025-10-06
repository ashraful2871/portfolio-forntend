export interface IProjects {
  id: number;
  name: string;
  image: string;
  techStack: string;
  myContribution?: string;
  description: string;
  liveLink: string;
  githubLink: string;
  challenges: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUser {
  id: number;
  email: string;
  name: string;
  phone: string;
  photo: string | null;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface IBlog {
  id: number;
  title: string;
  content: string;
  user: IUser;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

export interface ICreateProject {
  name: string;
  image: string;
  techStack: string;
  description: string;
  myContribution?: string;
  liveLink: string;
  githubLink: string;
  challenges: string;
}
export interface User {
  name?: string | null;
  email?: string | null;
  id: string;
}
