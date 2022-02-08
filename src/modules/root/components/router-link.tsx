import React, {FC} from "react";
import {useDispatch} from "react-redux";
import {actions} from "redux-router5";
import {router} from "../../../index";

interface RouterLinkProps extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
    routeName: string;
    params?: {[key:string]: unknown};
}

export const RouterLink: FC<RouterLinkProps> = ({routeName, params, ...props}) => {
    const dispatch = useDispatch();

    const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        dispatch(actions.navigateTo(routeName, params));
    };

    return <a {...props} href={router.buildUrl(routeName, params)} onClick={onClick} />;
}