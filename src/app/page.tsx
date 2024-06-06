'use client';

import ThumbnailEditor from '../components/ThumbnailEditor/ThumbnailEditor';
import styles from './Home.module.css';
import SideBar from '@/components/SideBar/SideBar';

const Home = () => {
  return (
    <div className={styles.container}>
      <ThumbnailEditor />
      <SideBar />
    </div>
  );
};

export default Home;
