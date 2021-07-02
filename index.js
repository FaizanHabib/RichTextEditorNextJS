import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import RichTextEditor from './RichTextEditor';
function App() {
  return (
    <div className={styles.App}>
      <h1>Rich Text Editor</h1>
      <RichTextEditor />
    </div>
  );
}

export default App;
