import { Teacher } from './dashboard/models/teacher';
import { Student } from './dashboard/models/student';
import { User } from './auth/login/models/user';

export interface State {
    teachers: Teacher[],
    students: Student[],
    user: User
  }