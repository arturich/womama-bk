import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';

//This is a functional component, more oriented to display data
const Header = () => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            <Link className='option' to='/shop/roles'>
                ROLES
            </Link>
            <Link className='option' to='/shop/corazon'>
                CORAZON
            </Link>
        </div>

    </div>
)

export default Header;