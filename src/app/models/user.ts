import { Timestamp } from '@angular/fire/firestore';

export interface User {
  uid: string;
  email: string;
  displayName?: string;
  firstname?: string;
  lastname?: string;
  role: 'admin' | 'customer';
  created: {
    createdAt: Timestamp;
    createdBy: string;
  }
  modified: {
    modifiedAt: Timestamp;
    modifiedBy: string;
  };
  clientid?: string[];
  };