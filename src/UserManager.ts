// src/UserManager.ts

import { User } from './user';

export class UserManager {
  private users: User[] = [];

  createUser(name: string, email: string): User {
    const user = new User(name, email);
    this.users.push(user);
    return user;
  }

  getUser(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  updateUser(id: number, name?: string, email?: string): boolean {
    const user = this.getUser(id);
    if (!user) return false;
    if (name) user.name = name;
    if (email) user.email = email;
    return true;
  }

  deleteUser(id: number): boolean {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) return false;
    this.users.splice(index, 1);
    return true;
  }

  listUsers(): User[] {
    return this.users;
  }
}
