import Header from './Header'
import LeftPanel from './LeftPanel'
import CenterPanel from './CenterPanel'
import RightPanel from './RightPanel'
import styles from './AppShell.module.css'

export default function AppShell() {
  return (
    <div className={styles.shell}>
      <Header />
      <div className={styles.body}>
        <LeftPanel />
        <CenterPanel />
        <RightPanel />
      </div>
    </div>
  )
}
