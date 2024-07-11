// import { IUser, UserCreationParams } from "@/src/database/models/user.model";
// import  UserRepository  from "@/src/database/repositories/user.repository";


// export class UserService {
//   public async getAllUsers(): Promise<IUser[]> {
//      try{
//        const usersAll:IUser[] = await UserRepository.getAllUsers();
//        return usersAll;
//      }catch(err){
//        throw err;
//      }
    
//   }

//   public async getUserById(id: string): Promise<IUser | null> {
//     try{
//       const userFound: IUser | null = await UserRepository.getUserById(id);
//       return userFound;
//     }catch(err){
//       throw err;
//     }
//   }

//   public async createUser(params: UserCreationParams): Promise<IUser> {
//     try{
//       const newUser: IUser = await UserRepository.createUser(params);
//       return newUser;
//     }catch(err){
//       throw err;
//     }
//   }

//   public async updateUser(id: string, params: Partial<IUser>): Promise<IUser | null> {
//     try{
//       const updatedUser: IUser | null = await UserRepository.updateUser(id, params);
//       return updatedUser;
//     }catch(err){
//       throw err;
//     }
//   }

//   public async deleteUser(id: string): Promise<IUser | null> {
//     try{
//       const deletedUser: IUser | null = await UserRepository.deleteUser(id);
//       return deletedUser;
//     }catch(err){
//       throw err;
//     }
//   }
// }

// export default new UserService();


import UserRepository from "@/src/database/repositories/user.repository";
import { IUser, UserCreationParams } from "@/src/database/models/user.model";

class UserService {
  public async getAllUsers(order: 1 | -1, filterName?: string): Promise<IUser[]> {
    return UserRepository.getAllUsers(order, filterName);
  }

  public async getUserById(id: string): Promise<IUser | null> {
    return UserRepository.getUserById(id);
  }

  public async createUser(data: UserCreationParams): Promise<IUser> {
    return UserRepository.createUser(data as IUser);
  }

  public async updateUser(id: string, data: Partial<IUser>): Promise<IUser | null> {
    return UserRepository.updateUser(id, data);
  }

  public async deleteUser(id: string): Promise<IUser | null> {
    return UserRepository.deleteUser(id);
  }
}

export default new UserService();
