import {FC} from "react";
import {userCreateRoute, userDetailRoute, usersListRoute} from "../../router/routes";
import {UserList} from "./user-list";
import {UserDetail} from "./user-detail";
import {useDispatch, useSelector} from "react-redux";
import {getRoute} from "../../router/router-selectors";
import {endsWithSegment, startsWithSegment} from "router5-helpers";
import {usersActions} from "../users-slice";
import {UserCreate} from "./user-create";

export const UsersRoute: FC = () => {
    const currentRoute = useSelector(getRoute);

    if (!currentRoute) {
        return null;
    }

    const isCurrentRoute = (routeName: string) => endsWithSegment(currentRoute, routeName);

    if (isCurrentRoute(usersListRoute))
        return <UserList />;
    else if (isCurrentRoute(userDetailRoute)) {
        return <UserDetail />;
    }
    else if (isCurrentRoute(userCreateRoute)) {
        return <UserCreate />;
    }

    throw new Error('Invalid user route');
};