import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const logo = <svg width="180px" height="50" viewBox="0 0 205 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.19083 46.4422H45.7278V49.4193H1.19083V46.4422Z" fill="#331F00"/>
<path d="M8.74894 41.798H38.6897V44.7751H8.74894V41.798Z" fill="#331F00"/>
<path d="M0.595414 49.4193C0.266576 49.4193 0 49.1527 0 48.8239V41.5598C0 41.231 0.266576 40.9644 0.595414 40.9644H5.23964C5.56848 40.9644 5.83505 41.231 5.83505 41.5598V48.8239C5.83505 49.1527 5.56848 49.4193 5.23964 49.4193H0.595414Z" fill="#331F00"/>
<path d="M9.28845 44.5369C8.95962 44.5369 8.69304 44.2703 8.69304 43.9415V36.3202C8.69304 35.9914 8.95962 35.7248 9.28845 35.7248H13.9327C14.2615 35.7248 14.5281 35.9914 14.5281 36.3202V43.9415C14.5281 44.2703 14.2615 44.5369 13.9327 44.5369H9.28845Z" fill="#331F00"/>
<path d="M33.4622 44.7751C33.1334 44.7751 32.8668 44.5085 32.8668 44.1797V36.3202C32.8668 35.9914 33.1334 35.7248 33.4622 35.7248H38.1065C38.4353 35.7248 38.7019 35.9914 38.7019 36.3202V44.1797C38.7019 44.5085 38.4353 44.7751 38.1065 44.7751H33.4622Z" fill="#331F00"/>
<path d="M41.679 49.4193C41.3501 49.4193 41.0835 49.1527 41.0835 48.8239V42.3934C41.0835 42.0646 41.3501 41.798 41.679 41.798H46.3232C46.652 41.798 46.9186 42.0646 46.9186 42.3934V48.8239C46.9186 49.1527 46.652 49.4193 46.3232 49.4193H41.679Z" fill="#331F00"/>
<path d="M52.8788 34.5796H54.1347L60.6936 17.694H62.0426L69.055 34.5796H70.2411V35.4866H63.9032V34.5796H65.6476L63.973 30.521H56.9141L55.3791 34.5796H57.4723V35.4866H52.8788V34.5796ZM63.6009 29.6139L60.2982 21.5781L57.263 29.6139H63.6009Z" fill="#331F00"/>
<path d="M75.5092 34.5796H77.8234L77.835 18.5895H75.672C74.3928 18.6747 73.5012 19.1477 72.9973 20.0082C72.6096 20.6672 72.3809 21.7603 72.3111 23.2876H71.4041V17.694H87.3825V23.2876H86.4755C86.4057 21.7758 86.1731 20.6827 85.7777 20.0082C85.2738 19.1477 84.3861 18.6747 83.1146 18.5895H80.9632V34.5796H83.2891V35.4866H75.5092V34.5796Z" fill="#331F00"/>
<path d="M88.9757 34.5796H90.7899L90.8015 18.6011H88.9757V17.694H95.8951V18.6011H93.9298V26.1135H102.582L102.593 18.6011H100.628V17.694H107.548V18.6011H105.722V34.5796H107.536V35.4866H100.628V34.5796H102.582V27.0206H93.9298V34.5796H95.8835V35.4866H88.9757V34.5796Z" fill="#331F00"/>
<path d="M109.024 34.5679H111.35L111.362 18.6011H109.024V17.694H124.061V22.7643H123.154C123.115 22.1208 123.061 21.551 122.991 21.0548C122.921 20.5509 122.774 20.1245 122.549 19.7756C122.099 19.0624 121.185 18.6709 119.805 18.6011H114.49V25.9042H117.397C118.056 25.9042 118.56 25.7995 118.909 25.5902C119.266 25.3731 119.483 24.9971 119.56 24.4622C119.576 24.3071 119.588 24.1443 119.595 23.9738C119.611 23.7954 119.626 23.621 119.642 23.4504H120.619V29.4511H119.642C119.626 29.2728 119.611 29.0673 119.595 28.8347C119.588 28.6022 119.576 28.4083 119.56 28.2533C119.483 27.7183 119.262 27.3462 118.898 27.1369C118.541 26.9198 118.041 26.8113 117.397 26.8113H114.49V34.5796H119.467C121.506 34.5796 122.743 33.6376 123.177 31.7537C123.301 31.211 123.383 30.6528 123.421 30.0791H124.328V35.4866H109.024V34.5679Z" fill="#331F00"/>
<path d="M127.143 34.5796H129.166V18.6011H127.143V17.694H132.411L141.83 31.7072V18.6011H139.574V17.694H145.098V18.6011H142.97V35.4866H140.807L130.306 20.0547V34.5796H132.667V35.4866H127.143V34.5796Z" fill="#331F00"/>
<path d="M146.749 34.5679H149.075L149.087 18.6011H146.749V17.694H161.786V22.7643H160.879C160.84 22.1208 160.786 21.551 160.716 21.0548C160.646 20.5509 160.499 20.1245 160.274 19.7756C159.825 19.0624 158.91 18.6709 157.53 18.6011H152.215V25.9042H155.122C155.781 25.9042 156.285 25.7995 156.634 25.5902C156.991 25.3731 157.208 24.9971 157.285 24.4622C157.301 24.3071 157.313 24.1443 157.32 23.9738C157.336 23.7954 157.351 23.621 157.367 23.4504H158.344V29.4511H157.367C157.351 29.2728 157.336 29.0673 157.32 28.8347C157.313 28.6022 157.301 28.4083 157.285 28.2533C157.208 27.7183 156.987 27.3462 156.623 27.1369C156.266 26.9198 155.766 26.8113 155.122 26.8113H152.215V34.5796H157.192C159.231 34.5796 160.468 33.6376 160.902 31.7537C161.026 31.211 161.108 30.6528 161.146 30.0791H162.053V35.4866H146.749V34.5679Z" fill="#331F00"/>
<path d="M165.914 18.6011H164.321V17.694H170.74V18.6011H169.043V29.3813C169.043 32.1956 169.833 33.8624 171.415 34.3819C171.942 34.5524 172.454 34.6377 172.95 34.6377C173.454 34.6377 173.888 34.6144 174.252 34.5679C174.625 34.5214 174.993 34.4323 175.357 34.3005C176.171 33.9903 176.838 33.4321 177.357 32.6259C177.885 31.8196 178.148 30.6683 178.148 29.172V18.6011H176.334V17.694H180.986V18.6011H179.288V29.3348C179.288 31.4823 178.73 33.0833 177.613 34.1376C176.497 35.192 174.981 35.7192 173.066 35.7192C169.461 35.7192 167.197 34.3547 166.275 31.6257C166.027 30.897 165.903 30.017 165.903 28.9859L165.914 18.6011Z" fill="#331F00"/>
<path d="M182.416 34.5796H184.556V18.6011H182.393V17.694H188.463L193.708 30.6373L198.918 17.694H204.791V18.6011H202.523V34.5796H205V35.4866H197.267V34.5796H199.383L199.395 19.1011L192.929 35.2424H192.464L185.614 19.0197V34.5796H187.719V35.4866H182.416V34.5796Z" fill="#331F00"/>
<path d="M23.3402 26.4485L23.5911 26.5676L23.9356 26.4117V39.0656L23.5911 39.1782L23.3402 39.0922V26.4485Z" fill="#331F00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.0577 11.0346V39.6545H37.5111V10.7174L37.5072 10.7145L37.5068 10.7174C37.478 10.9194 37.3042 11.0747 37.0943 11.0747H34.2363C34.1724 11.0747 34.1118 11.0603 34.0577 11.0346ZM36.8865 10.2411L23.4593 0L33.839 10.5314C33.8926 10.3631 34.0502 10.2411 34.2363 10.2411H36.8865Z" fill="#331F00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4003 10.2887C25.4527 10.3584 25.4837 10.445 25.4837 10.5388C25.4837 10.5759 25.4789 10.6118 25.4698 10.646L25.4003 10.2887ZM21.9643 10.3351L23.3998 0L25.4003 10.2887C25.3243 10.1875 25.2032 10.122 25.0669 10.122H22.328C22.1718 10.122 22.0357 10.2079 21.9643 10.3351ZM21.9643 10.3351C21.9305 10.3953 21.9112 10.4648 21.9112 10.5388C21.9112 10.5722 21.9151 10.6047 21.9226 10.6358L21.9643 10.3351Z" fill="#331F00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.4593 0L10.3364 10.3602H13.1586C13.3183 10.3602 13.4571 10.45 13.527 10.5819L23.4593 0ZM9.88387 38.4637V11.0687C9.95952 11.1459 10.0649 11.1938 10.1816 11.1938H13.1586C13.2753 11.1938 13.3807 11.1459 13.4563 11.0687V38.4637H9.88387Z" fill="#331F00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4837 25.7112L23.5911 26.5676L21.9112 25.7703L23.3402 26.4485V39.0922L23.5911 39.1782L23.9356 39.0656V26.4117L25.4837 25.7112Z" fill="#331F00"/>
<path d="M23.3402 26.4485L23.5911 26.5676L23.9356 26.4117V39.0656L23.5911 39.1782L23.3402 39.0922V26.4485Z" fill="#331F00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4837 25.7112L23.5911 26.5676L21.9112 25.7703L23.3402 26.4485V39.0922L23.5911 39.1782L23.9356 39.0656V26.4117L25.4837 25.7112Z" fill="#331F00"/>
<path d="M23.3402 26.4485L23.5911 26.5676L23.9356 26.4117V39.0656L23.5911 39.1782L23.3402 39.0922V26.4485Z" fill="#331F00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4837 25.7112L23.5911 26.5676L21.9112 25.7703L23.3402 26.4485V39.0922L23.5911 39.1782L23.9356 39.0656V26.4117L25.4837 25.7112Z" fill="#331F00"/>
<path d="M25.0669 10.9556H22.328C22.1618 10.9556 22.0182 10.8583 21.9513 10.7174H21.9112V25.7703L23.3402 26.4485L23.5911 26.5676L23.9356 26.4117L25.4837 25.7112V10.7174H25.4436C25.3767 10.8583 25.2332 10.9556 25.0669 10.9556Z" fill="#331F00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.7233 25.4853V35.741C30.7233 36.3592 30.3259 36.9072 29.7383 37.0993L23.5911 39.1082L17.7563 37.1083C17.1787 36.9103 16.7907 36.3672 16.7907 35.7565V25.5301C16.7907 24.4806 17.8842 23.7892 18.8323 24.2392L23.5911 26.4976L28.7052 24.1834C29.6511 23.7554 30.7233 24.4471 30.7233 25.4853ZM29.7707 35.3221V26.4791C29.7707 25.5839 28.8451 24.9875 28.0286 25.3565L23.6138 27.3519L19.5058 25.4046C18.6873 25.0166 17.7433 25.6128 17.7433 26.5177V35.3355C17.7433 35.862 18.0783 36.3304 18.5769 36.5011L23.6138 38.2255L28.9203 36.4933C29.4275 36.3277 29.7707 35.8551 29.7707 35.3221Z" fill="#331F00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.4277 3.19405e-07L42.106 11.7368C42.1807 11.6248 42.3082 11.551 42.453 11.551H45.2392L23.4277 3.19405e-07ZM42.1893 12.2906V43.3461H45.6889V12.2945C45.6178 12.3509 45.5279 12.3846 45.4301 12.3846H42.453C42.353 12.3846 42.2611 12.3493 42.1893 12.2906Z" fill="#331F00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.61625 11.551L23.4277 3.19405e-07L4.79278 11.7096C4.71645 11.613 4.59826 11.551 4.4656 11.551H1.61625ZM1.16652 12.2324V43.3461H4.6661V12.3333C4.60661 12.366 4.53828 12.3846 4.4656 12.3846H1.48853C1.35883 12.3846 1.24297 12.3254 1.16652 12.2324Z" fill="#331F00"/>
</svg>

const title_style = {
  fontFamily:"Cantata One",


}

export default function TopBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color= "white"position="static">
        <Toolbar>
        {logo}
          {/* <IconButton edge="end" aria-label="home page"  color="inherit" href="/">
            <HomeIcon />
          </IconButton> */}
          {props.isAuthenticated ? <Button color="inherit" href="/update_password">Update Password</Button> : null}
          {props.isAuthenticated ? <Button color="inherit" onClick={() => props.logout()}>Logout</Button> : null}
        </Toolbar>
      </AppBar>
    </div>
  );
}