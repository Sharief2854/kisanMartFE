import React, { useState } from 'react';
import styles from './Header.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
function Header() {
    const [display, setdisplay] = useState(false);
  return (
          <div className={styles.header}>
              <div className={styles.logoContainer}>
                  <img src="./logo.png" alt="" className={styles.logo} />
                  <h3>KisanMart</h3>
              </div>
              <div 
                    className={styles.nameContainer} 
                    onClick={()=>setdisplay(true)} 
                    tabIndex="0"
                    onBlur={()=>setdisplay(false)}
                >
                  <div className={styles.circle}>S</div>
                  <p>
                      Sharief
                  </p>
                  <KeyboardArrowDownIcon />
              </div>
          {
            display==false?""
            :
            <div className={styles.dropDownContainer}>
                <div style={{ padding: "10px" }}>
                    <div>sharief@gmail.com</div>
                    <div>Admin</div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.logoutContainer} style={{ padding: "10px" }}>
                    <PowerSettingsNewIcon
                        sx={{
                            fontSize: "1.5rem"
                        }}
                    />
                    <button className={styles.logoutBtn}>Logout</button>
                </div>
            </div>
          }
        </div>
  )
}

export default Header