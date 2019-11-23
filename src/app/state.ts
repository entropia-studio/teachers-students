import { Teacher } from './dashboard/shared/models/teacher';
import { Student } from './dashboard/shared/models/student';
import { User } from './auth/login/models/user';

export interface State {
    teachers: Teacher[],
    students: Student[],
    user: User
  }