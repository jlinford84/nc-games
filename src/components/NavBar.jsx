import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className='navBar'>
            <Link className='nav-link' to='/'>Home</Link>
            <Link className='nav-link' to='/category/strategy'>Strategy</Link>
            <Link className='nav-link' to='/category/hidden-roles'>Hidden roles</Link>
            <Link className='nav-link' to='/category/dexterity'>Dexterity</Link>
            <Link className='nav-link' to='/category/push-your-luck'>Push your luck</Link>
            <Link className='nav-link' to='/category/roll-and-write'>Roll and write</Link>
            <Link className='nav-link' to='/category/deck-building'>Deck building</Link>
            <Link className='nav-link' to='/category/engine-building'>Engine building</Link>
        </nav>
    )

}