import {FC} from "react";
import {userDetailRoute, usersListRoute} from "../../router/routes";
import {UserList} from "./user-list";
import {UserDetail} from "./user-detail";
import {useDispatch, useSelector} from "react-redux";
import {getRoute} from "../../router/router-selectors";
import {endsWithSegment, startsWithSegment} from "router5-helpers";
import {usersActions} from "../users-slice";

export const UsersRoute: FC = () => {
    const currentRoute = useSelector(getRoute);

    if (!currentRoute) {
        return null;
    }

    const isCurrentRoute = (routeName: string) => endsWithSegment(currentRoute, routeName);

    if (isCurrentRoute(usersListRoute))
        return <UserList />;
    else if (isCurrentRoute(userDetailRoute)) {
        const id = currentRoute.params['id'] as string;

        if (!id) {
            throw new Error('User detail requires id parameter.');
        }

        return <UserDetail userId={id}/>;
    }

    throw new Error('Invalid user route');
};