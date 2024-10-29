export interface IPRegistration {
  id: string;
  userId: string;
  title: string;
  description: string;
  category: string;
  status: 'pending' | 'reviewing' | 'approved' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
  blockchainHash?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  registrations: IPRegistration[];
}
