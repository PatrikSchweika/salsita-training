import React, {FC} from 'react';
import {RootState} from "../root-reducer";
import {connect, ConnectedProps} from "react-redux";

const connector = connect((state: RootState) => ({
    title: state.title.title
}));

type HeaderProps = ConnectedProps<typeof connector>;

// Function
const HeaderComponent: FC<HeaderProps> = ({ title }) =>
{
    console.log('Header is rendering...');
    return <h1>{title}</h1>;
}

export const Header = connector(HeaderComponent);