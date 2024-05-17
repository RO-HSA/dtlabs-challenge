import { useModal } from '@/hooks/useModal'
import SalesChart from '../SalesChart'
import styles from './modal.module.css'

const ChartModal = () => {
  const { modal, overlay, modalContent } = styles
  const { title, content, isVisible, setIsVisible, setContent } = useModal()

  const closeModal = () => {
    setIsVisible(!isVisible)
    setContent([])
  }

  return (
    <div style={{ display: isVisible ? 'flex' : 'none' }} className={modal}>
      <div className={modalContent}>
        <div>
          <SalesChart title={title} data={content} arrowSize={22} />
        </div>
      </div>
      <div className={overlay} onClick={closeModal}></div>
    </div>
  )
}

export default ChartModal
