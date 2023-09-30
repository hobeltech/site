import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="/logo.png"
        width={321}
        height={319}
        alt="Hobeltech"
      />
      Under construction
    </main>
  )
}
