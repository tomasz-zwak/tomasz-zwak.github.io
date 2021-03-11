 function Header(props){
    return (
        <header id="header">
            <div className="inner">
                {/* <!-- Nav --> */}
                <nav>
                    <ul>
                        <li><a id="menu-btn" onClick={props.toggleMenu}>Menu</a></li>
                    </ul>
                 </nav>
            </div>
        </header>)
}
export default Header;