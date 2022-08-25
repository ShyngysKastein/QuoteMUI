import Header from "../Header/Header";
import {Outlet} from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = () => (
  <>
    <Header/>
    <main className={styles.LayoutMain}>
      <Outlet/>
    </main>
  </>
)

export default Layout;
