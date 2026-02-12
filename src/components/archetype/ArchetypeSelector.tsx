import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import type { Archetype } from '../../types'
import { archetypes } from '../../data/archetypes'
import ArchetypeCard from './ArchetypeCard'
import styles from './ArchetypeSelector.module.css'

export default function ArchetypeSelector() {
  const navigate = useNavigate()

  const handleSelect = (archetype: Archetype) => {
    const buildId = uuidv4()
    // For now, store the selection in sessionStorage so BuildPage can read it
    sessionStorage.setItem('pendingBuild', JSON.stringify({
      id: buildId,
      archetypeId: archetype.id,
    }))
    navigate(`/build/${buildId}`)
  }

  return (
    <div className={styles.grid}>
      {archetypes.map((at) => (
        <ArchetypeCard
          key={at.id}
          archetype={at}
          onClick={handleSelect}
        />
      ))}
    </div>
  )
}
