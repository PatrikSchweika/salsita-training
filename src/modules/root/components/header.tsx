import React, {FC} from 'react';

interface HeaderProps {
    title: String
}

export const Header: FC<HeaderProps> = ({ title }) => (
    <h1>{title}</h1>
)

