import React from 'react';
import Aux from '../../hoc/auxiliary';
import layoutClasses from './Layout.module.css';

const layout = (props) => (
    <Aux>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main className={layoutClasses.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;