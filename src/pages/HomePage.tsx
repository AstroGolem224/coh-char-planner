import ArchetypeSelector from '../components/archetype/ArchetypeSelector'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          <span className={styles.titleSub}>City of Heroes</span>
          <span className={styles.titleMain}>Char Planner</span>
        </h1>
        <p className={styles.subtitle}>Plan your hero. Perfect your build.</p>
      </div>
      <div className={styles.archetypeArea}>
        <h2 className={styles.sectionTitle}>Choose Your Archetype</h2>
        <ArchetypeSelector />
      </div>
    </div>
  )
}
