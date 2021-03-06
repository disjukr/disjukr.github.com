import React, { useContext } from 'react';
import classNames from 'classnames';
import Link from 'gatsby-link';

import { pageTransitionStateContext } from '../components/Layout';
import MarbleBackground from '../components/MarbleBackground';
import * as styles from './index.module.scss';

export default () => {
    const pageTransitionState = useContext(pageTransitionStateContext);
    return (
        <div className={classNames(styles.page, styles[pageTransitionState])}>
            <MarbleBackground className={classNames(styles.background, styles.layer)} />
            <div className={styles.layer}>
                <h1>JongChan Choi</h1>
                <ul>
                    <li>
                        <Link to="/resume">resume</Link>
                    </li>
                    <li>
                        <a href="https://github.com/disjukr">github</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/disjukr">twitter</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
