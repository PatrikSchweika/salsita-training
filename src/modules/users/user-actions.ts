import {Action, ActionCreator} from "redux";
import {UserName} from "./user-types";

export enum UserActionTypes {
    usersAddUser = 'users/addUser'
}

interface AddUserAction extends Action<typeof UserActionTypes.usersAddUser> {
    payload: UserName;
}

export type UserActions = AddUserAction;

const addUser: ActionCreator<AddUserAction> = (userName: UserName) => ({
   type: UserActionTypes.usersAddUser,
   payload: userName
});

export const UserActionCreators = {
    addUser: addUser
}