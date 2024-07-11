// import { Controller, Route, Post, Get, Body, Path, Put, Delete, Middlewares} from 'tsoa';
// import { IUser, UserCreationParams } from '@/src/database/models/user.model';
// import consoleUserShowTime from '@/src/middlewares/getRequest';
// import  UserService  from '@/src/services/user.service';

// @Route("/v1/users")
// export class UserController extends Controller {
//   @Get("/")
//   @Middlewares(consoleUserShowTime) //local middlewares
//   public async getAllUsers(): Promise<IUser[]> {
//     try{
//       const usersAll:IUser[] = await UserService.getAllUsers();
//       return usersAll;
//     }catch(err){
//       console.error('Failed to get users',err);
//       throw err;
//     }
//   }
 
//   @Get("{id}")
//   public async getUserById(@Path() id: string): Promise<IUser | null> {
//     try{
//       const userFound:IUser | null = await UserService.getUserById(id);
//       return userFound;
//     }catch(err){
//       throw err;
//     }
//   }

//   @Post("/")
//   public async createNewUser(@Body() requestBody: UserCreationParams): Promise<IUser> {
//     try{
//       const newUser:IUser = await UserService.createUser(requestBody);
//       return newUser;
//     }catch(err){
//       throw err;
//     }
//   }

//   @Put("{id}")
//   public async updateUser(@Path() id:string, @Body() body: Partial<IUser>): Promise<IUser | null> {
//     try{
//       const updatedUser:IUser | null = await UserService.updateUser(id, body);
//       return updatedUser;
//     }catch(err){
//       throw err;
//     }
//   }

//   @Delete("{id}")
//   public async deleteUser(@Path() id: string): Promise<IUser | null> {
//     try{
//       const deleteUser = await UserService.deleteUser(id);
//       return deleteUser;
//     }catch(err){
//       throw err;
//     }
//   }
// }



import { Controller, Route, Get, Post, Body, Path, Put, Delete, Query, Middlewares } from 'tsoa';
import { IUser, UserCreationParams } from '@/src/database/models/user.model';
import consoleUserShowTime from '@/src/middlewares/getRequest';
import UserService from '@/src/services/user.service';

@Route("/v1/users")
export class UserController extends Controller {
  @Get("/")
  @Middlewares(consoleUserShowTime) // Local middleware
  public async getAllUsers(@Query() sortOrder?: 'asc' | 'desc', @Query() filterName?: string): Promise<IUser[]> {
    try {
      const order = sortOrder === 'desc' ? -1 : 1;
      const usersAll: IUser[] = await UserService.getAllUsers(order, filterName);
      return usersAll;
    } catch (err) {
      console.error('Failed to get users', err);
      throw err;
    }
  }

  @Get("{id}")
  public async getUserById(@Path() id: string): Promise<IUser | null> {
    try {
      const userFound: IUser | null = await UserService.getUserById(id);
      return userFound;
    } catch (err) {
      throw err;
    }
  }

  @Post("/")
  public async createNewUser(@Body() requestBody: UserCreationParams): Promise<IUser> {
    try {
      const newUser: IUser = await UserService.createUser(requestBody);
      return newUser;
    } catch (err) {
      throw err;
    }
  }

  @Put("{id}")
  public async updateUser(@Path() id: string, @Body() body: Partial<IUser>): Promise<IUser | null> {
    try {
      const updatedUser: IUser | null = await UserService.updateUser(id, body);
      return updatedUser;
    } catch (err) {
      throw err;
    }
  }

  @Delete("{id}")
  public async deleteUser(@Path() id: string): Promise<IUser | null> {
    try {
      const deleteUser = await UserService.deleteUser(id);
      return deleteUser;
    } catch (err) {
      throw err;
    }
  }
}
