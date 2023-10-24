import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>
                <ul>
                    <li>
                        <Link to={'/'}>Home(Posts)</Link>
                    </li>
                    <li>
                        <Link to={'/createpost'}>Create post</Link>
                    </li>
                </ul>
            </header>

            <Outlet/>

            <footer></footer>
        </>

    );
};

export default Layout;