import React, {FC} from 'react';
import {connect, ConnectedProps, useSelector} from "react-redux";
import {getTitle} from "../../title/title-selectors";

export const Header: FC = () => {
    const title = useSelector(getTitle);

    return (<h1>{title}</h1>);
}

// const connector = connect((state: RootState) => ({
//     title: state.title.title
// }));
//
// type HeaderProps = ConnectedProps<typeof connector>;
//
// // Function
// const HeaderComponent: FC<HeaderProps> = ({ title }) =>
// {
//     console.log('Header is rendering...');
//     return <h1>{title}</h1>;
// }
//
// export const Header = connector(HeaderComponent);



