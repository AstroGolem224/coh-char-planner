import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useBuildStore } from '../store'
import AppShell from '../components/layout/AppShell'
import EnhancementPicker from '../components/enhancement/EnhancementPicker'

export default function BuildPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const currentBuild = useBuildStore((s) => s.currentBuild)
  const createNewBuild = useBuildStore((s) => s.createNewBuild)
  const loadBuild = useBuildStore((s) => s.loadBuild)

  useEffect(() => {
    if (currentBuild?.id === id) return

    // Check if there's a pending build from archetype selection
    const pending = sessionStorage.getItem('pendingBuild')
    if (pending) {
      try {
        const { id: pendingId, archetypeId } = JSON.parse(pending)
        if (pendingId === id) {
          createNewBuild(archetypeId, undefined, pendingId)
          sessionStorage.removeItem('pendingBuild')
          return
        }
      } catch {
        // ignore
      }
    }

    // Try to load from saved builds
    if (id) {
      loadBuild(id)
    }

    // Check store directly — not the stale closure variable
    if (!useBuildStore.getState().currentBuild) {
      navigate('/')
    }
  }, [id, currentBuild?.id, createNewBuild, loadBuild, navigate])

  if (!currentBuild) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        height: '100vh', color: '#5c6bc0', fontFamily: 'var(--coh-font-heading)',
        fontSize: '1.2rem', letterSpacing: '2px'
      }}>
        Loading build...
      </div>
    )
  }

  return (
    <>
      <AppShell />
      <EnhancementPicker />
    </>
  )
}
