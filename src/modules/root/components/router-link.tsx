import React, {FC, useCallback} from "react";
import {useDispatch} from "react-redux";
import {actions} from "redux-router5";

interface RouterLinkProps extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
    routeName: string;
    params?: {[key:string]: unknown};
}

export const RouterLink: FC<RouterLinkProps> = ({routeName, params, ...props}) => {
    const dispatch = useDispatch();
    const navigateCallback = useCallback(
        () => dispatch(actions.navigateTo(routeName, params)),
    [dispatch]
    );

    return <a {...props} onClick={navigateCallback} />;
}