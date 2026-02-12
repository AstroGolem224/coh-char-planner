import { useNavigate } from 'react-router-dom';
import { useBuildStore } from '../../store';
import { archetypes } from '../../data/archetypes';
import styles from './BuildListModal.module.css';

interface Props {
  onClose: () => void;
}

export default function BuildListModal({ onClose }: Props) {
  const navigate = useNavigate();
  const savedBuilds = useBuildStore((s) => s.savedBuilds);
  const loadBuild = useBuildStore((s) => s.loadBuild);
  const deleteBuild = useBuildStore((s) => s.deleteBuild);

  function handleLoad(buildId: string) {
    loadBuild(buildId);
    onClose();
    navigate(`/build/${buildId}`);
  }

  function handleDelete(e: React.MouseEvent, buildId: string) {
    e.stopPropagation();
    deleteBuild(buildId);
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <span className={styles.title}>Saved Builds</span>
          <button className={styles.closeBtn} onClick={onClose}>×</button>
        </div>
        <div className={styles.content}>
          {savedBuilds.length === 0 ? (
            <div className={styles.empty}>No saved builds yet. Click Save to store your current build.</div>
          ) : (
            savedBuilds.map((build) => {
              const at = archetypes.find((a) => a.id === build.archetypeId);
              const date = new Date(build.updatedAt).toLocaleDateString();
              return (
                <div key={build.id} className={styles.buildItem} onClick={() => handleLoad(build.id)}>
                  <div>
                    <div className={styles.buildName}>{build.name}</div>
                    <div className={styles.buildMeta}>
                      {at?.name || 'Unknown'} — {build.powerPicks.length} powers — {date}
                    </div>
                  </div>
                  <button className={styles.deleteBtn} onClick={(e) => handleDelete(e, build.id)}>
                    Delete
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
