// import User, { IUser } from "@/src/database/models/user.model";

// export class UserRepository {
//   public async getAllUsers(): Promise<IUser[]> {
//     try {
//       const users:IUser[] = await User.find();
//       return users;
//     } catch (err) {
//       throw err; // Re-throw to propagate the error
//     }
//   }
//   public async getUserById(id: string): Promise<IUser | null> {
//     try {
//       const user:IUser | null = await User.findById(id);
//       if(!user) {
//         throw new Error(`User ${id} does not found`);
//       }
//       return user;
//     } catch (err) {
//       throw err; // Re-throw to propagate the error
//     }
//   }

//   public  async createUser(data: IUser): Promise<IUser> {
//     try {
//       const newUser = new User(data);
//       const creatUser:IUser = await newUser.save();
//       return creatUser
//     } catch (err) {
//       throw err; // Re-throw to handle errors
//     }
//   }

//   public async updateUser(
//     id: string,
//     data: Partial<IUser>
//   ): Promise<IUser | null> {
//     try {
//       const user:IUser | null = await User.findByIdAndUpdate(id, data, { new: true });
//       return user;
//     } catch (err) {
//       throw err; // Re-throw to propagate the error
//     }
//   }

//   public async deleteUser(id: string): Promise<IUser | null> {
//     try {
//       const user:IUser | null = await User.findByIdAndDelete(id);
//       return user;
//     } catch (err) {
//       throw err; // Re-throw to propagate the error
//     }
//   }
// }
// export default new UserRepository();

import User, { IUser } from "@/src/database/models/user.model";

export class UserRepository {
  public async getAllUsers(sortOrder: 1 | -1 = 1, filterName?: string): Promise<IUser[]> {
    try {
      const query = filterName ? { name: { $regex: filterName, $options: 'i' } } : {};
      const users: IUser[] = await User.find(query).sort({ name: sortOrder });
      return users;
    } catch (err) {
      throw err; // Re-throw to propagate the error
    }
  }

  public async getUserById(id: string): Promise<IUser | null> {
    try {
      const user: IUser | null = await User.findById(id);
      if (!user) {
        throw new Error(`User ${id} not found`);
      }
      return user;
    } catch (err) {
      throw err; // Re-throw to propagate the error
    }
  }

  public async createUser(data: IUser): Promise<IUser> {
    try {
      const newUser = new User(data);
      const createdUser: IUser = await newUser.save();
      return createdUser;
    } catch (err) {
      throw err; // Re-throw to handle errors
    }
  }

  public async updateUser(id: string, data: Partial<IUser>): Promise<IUser | null> {
    try {
      const user: IUser | null = await User.findByIdAndUpdate(id, data, { new: true });
      return user;
    } catch (err) {
      throw err; // Re-throw to propagate the error
    }
  }

  public async deleteUser(id: string): Promise<IUser | null> {
    try {
      const user: IUser | null = await User.findByIdAndDelete(id);
      return user;
    } catch (err) {
      throw err; // Re-throw to propagate the error
    }
  }
}

export default new UserRepository();
