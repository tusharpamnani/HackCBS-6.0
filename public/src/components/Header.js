import React from 'react'
import styles from "../stylesheets/Header.module.css"
import { HiSearch, HiOutlineBell } from "react-icons/hi";
function Header() {
    return (
        <div className={styles.header}>
            <div style={{ position: "absolute", left: "60px",top:"35%", margin: "0px 5px" }} className={styles.iconBox}>
                <HiSearch />
            </div>
            <input type="text" placeholder='Search Here' className={styles.searchBar} />
            <div className={styles.profileSection}>
                <div className={styles.iconBox}>
                    <HiOutlineBell style={{height:"70%",aspectRatio:"1"}} />
                </div>
                <div className={styles.iconBox}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAMFBMVEXk5ueutLfn6eqnrrGrsbTh4+S2u77KztDd4OHT1ti8wcOxt7rBxsjFycvN0dPW2dp1kOXXAAAC5ElEQVR4nO2a3ZarIAyFJfyIoPL+bztox1OnUzGxCZ5Zi++ml3s3hACJXddoNBqNRqPRaDQafxgAsN57m3/vELfD5GJUmRh639X1ADAEZYzaMCaOvqIFmONTfPOgXS0LkH7Lr+hga1iA8b38EgU1yDuw7lB/sdCL68eC/OJglI2BL8svDoKkg7P/Lx0DKK7/hhbLROgx+jkGXkg/4fSVckIhcEj9vBklHMCADUDGShjAy8uEgBIApfkNADoD1hDM7A6sphhQgVsfZsoK5BCwp2Eg6edyyG0AcQr8gPtM8rQUyNWQV79Dl+GNyJsE2HNoB++JBBPVgEm8Boib4H8wwLsP/6IB5iW4PQnv3oZdolZC5kJEPY0FLqbUw4j7eQIjTZ/9OKZeSPjvxXDzlSyXItKtOPFfi2k3AoF3ARD2gczbjBICkdcpPguMUIfgvD/zrS/VpYEZuRUl3sYPB6hFkNiC/xwgmkQC79Id5Tblqj+JNgrhzIGW1V8sjKVMlGvR7RzM6igIpk7HHvz7zWBUX2tuAsmZVw/GTFWmBZsFP0VtnuLazZWnRh2An8fgMiFMQ3fP4Owxr4PqY7tV0fph7qeVfh6SX2JQZQtAl+YpRKO12aG1Vm7skxUNBoBNk1v0DsqAUSaOg5cxsYxKfwwrj4qRUU5gkJoDHw4L4BsTzLsSuj4S34bG8M1ywY6a/DhfLASWmwnYCR/7FwuK43A6PvtQHsbPcgE8alBXjMInN7Ty5QNrIV49JT//+xvXrkmQPlr9PZcuqhf6YgUH9LcSy/LvHFDHB4XPJKo4oDdGeR2wrv/TAToPgNwWxTlAtw69wP9fHWDrAVf9+Q2qgS2SAA9w5UBqAVYHiEWgNSTJnBuQDACmfcJeAl85DYFICXhylgWCW+CbszY66UONS5SbiFZc38xFA6RPZa5RLEbieyATSwGgfatz0UDpQMB8L/gxpZmuXzoN0hQHelCBkn6j0Wg0buALGSkgcecnNN4AAAAASUVORK5CYII=" alt="" className={styles.avatar} />
                </div>
            </div>
        </div>
    )
}

export default Header
