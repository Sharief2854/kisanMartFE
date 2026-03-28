import React, { useState } from 'react';
import styles from './Header.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useNavigate } from 'react-router-dom';
function Header() {
    const [display, setdisplay] = useState(false);

    let navigate=useNavigate();

    function logout(event){
        
        localStorage.removeItem("token");
        navigate("/");

    }

  return (
          <div className={styles.header}
            tabIndex="0"
            onBlur={() => setdisplay(false)}
          >
              <div className={styles.logoContainer}>
                  <img src="./logo.png" alt="" className={styles.logo} />
                  <h3>KisanMart</h3>
              </div>
              <div 
                    className={styles.nameContainer} 
                    onClick={()=>setdisplay(true)} 
                    
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
                <div 
                    className={styles.logoutContainer}
                    style={{ padding: "10px" }}
                    onClick={logout}     
                >
                    <PowerSettingsNewIcon
                        sx={{
                            fontSize: "1.5rem"
                        }}
                    />
                    Logout
                </div>
            </div>
          }
        </div>
  )
}

export default Header