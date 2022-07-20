export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
  phone: string;
  website: string;
  company: string;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
