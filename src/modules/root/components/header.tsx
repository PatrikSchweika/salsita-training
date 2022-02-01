import React, {FC} from 'react';

interface HeaderProps {
    title: string;
}

// Component
// export class Header extends React.Component<HeaderProps, any> {
//     render = () => {
//         console.log('Header is rendering...')
//         return <h1>{this.props.title}</h1>;
//     }
// }

// PureComponent
// export class Header extends React.PureComponent<HeaderProps, any> {
//     render = () => {
//         console.log('Header is rendering...')
//         return <h1>{this.props.title}</h1>;
//     }
// }

// Function
// export const Header: FC<HeaderProps> = ({ title }) =>
// {
//     console.log('Header is rendering...');
//     return <h1>{title}</h1>;
// }

// Function Memo
export const Header = React.memo(({ title } : HeaderProps) =>
{
    console.log('Header is rendering...');
    return <h1>{title}</h1>;
})


