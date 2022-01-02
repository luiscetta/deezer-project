
import { useState } from 'react';
import axios from 'axios';

import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';
import Image from 'next/image';

export default function Navigation() {
    return (
        <div className={styles.container}>
            <div className={styles.logotipo}>
                <Link href="/">
                    <a>
                        <Image src="/deezer-logo.svg" width={120} height={35} alt="logotipo"></Image>
                    </a>
                </Link>
            </div>
            <ul className={styles.content}>
                <div className={styles.list_content}>
                    <li className={styles.list}>
                        <Link className={styles.link} href="/">
                            <a>HOME</a>
                        </Link>
                    </li>

                    <li className={styles.list}>
                        <Link className={styles.link} href="/favorite">
                            <a>FAVORITES</a>
                        </Link>
                    </li>
                </div>
            </ul>
        </div>
    )
}