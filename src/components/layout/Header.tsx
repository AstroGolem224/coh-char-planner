import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBuildStore } from '../../store'
import { getArchetypeById } from '../../data'
import BuildListModal from '../io/BuildListModal'
import styles from './Header.module.css'

export default function Header() {
  const navigate = useNavigate()
  const build = useBuildStore((s) => s.currentBuild)
  const saveBuild = useBuildStore((s) => s.saveBuild)
  const exportBuild = useBuildStore((s) => s.exportBuild)
  const importBuild = useBuildStore((s) => s.importBuild)
  const updateBuildName = useBuildStore((s) => s.updateBuildName)
  const archetype = build ? getArchetypeById(build.archetypeId) : null
  const [showLoadModal, setShowLoadModal] = useState(false)
  const [saveFlash, setSaveFlash] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSave = useCallback(() => {
    saveBuild()
    setSaveFlash(true)
    setTimeout(() => setSaveFlash(false), 600)
  }, [saveBuild])

  // Ctrl+S keyboard shortcut
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault()
        handleSave()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleSave])

  function handleExport() {
    const json = exportBuild()
    if (!json) return
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${build?.name || 'build'}.coh.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  function handleImportClick() {
    fileInputRef.current?.click()
  }

  function handleImportFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      const text = ev.target?.result as string
      if (text) {
        const success = importBuild(text)
        if (success) {
          const imported = useBuildStore.getState().currentBuild
          if (imported) {
            navigate(`/build/${imported.id}`)
          }
        }
      }
    }
    reader.readAsText(file)
    // Reset so same file can be re-imported
    e.target.value = ''
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo} onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <span className={styles.logoSub}>CoH</span>
          <span className={styles.logoMain}>Char Planner</span>
        </div>
        <div className={styles.buildInfo}>
          {archetype && (
            <span
              className={styles.archetype}
              style={{ color: archetype.accentColor }}
            >
              {archetype.name}
            </span>
          )}
          <input
            className={styles.buildNameInput}
            value={build?.name || ''}
            onChange={(e) => updateBuildName(e.target.value)}
            placeholder="Build Name"
          />
          <span className={styles.buildLevel}>Level {build?.level || 1}</span>
        </div>
        <div className={styles.actions}>
          <button
            className={`${styles.actionBtn} ${saveFlash ? styles.saveFlash : ''}`}
            onClick={handleSave}
            title="Save (Ctrl+S)"
          >
            Save
          </button>
          <button className={styles.actionBtn} onClick={() => setShowLoadModal(true)}>
            Load
          </button>
          <button className={styles.actionBtn} onClick={handleExport}>
            Export
          </button>
          <button className={styles.actionBtn} onClick={handleImportClick}>
            Import
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json,.coh.json"
            style={{ display: 'none' }}
            onChange={handleImportFile}
          />
        </div>
      </header>
      {showLoadModal && <BuildListModal onClose={() => setShowLoadModal(false)} />}
    </>
  )
}
