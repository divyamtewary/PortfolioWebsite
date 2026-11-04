import { useEffect, useRef } from 'react'

// Native <dialog> gives focus trapping, Escape to close and a backdrop for free.
export default function ItemModal({ item, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (item && !dialog.open) dialog.showModal()
    if (!item && dialog.open) dialog.close()
  }, [item])

  const handleBackdrop = (event) => {
    if (event.target === ref.current) ref.current.close()
  }

  return (
    <dialog
      ref={ref}
      className="item-modal"
      onClose={onClose}
      onClick={handleBackdrop}
      aria-labelledby="item-modal-title"
    >
      {item ? (
        <div className="item-modal-inner">
          <div className="item-media item-media--modal">
            {item.src ? (
              <img src={item.src} alt={`Preview card for ${item.name}`} />
            ) : (
              <span className="item-placeholder">{item.name}</span>
            )}
          </div>
          <div className="item-modal-body">
            <div className="item-modal-top">
              <h3 id="item-modal-title">{item.name}</h3>
              <span className={`status status--${item.status.toLowerCase()}`}>{item.status}</span>
            </div>
            <p>{item.description}</p>
            <div className="item-modal-actions">
              {item.url ? (
                <a className="btn btn-solid" href={item.url} target="_blank" rel="noreferrer">
                  Open on GitHub <span aria-hidden="true">↗</span>
                </a>
              ) : null}
              <button type="button" className="btn btn-ghost" onClick={() => ref.current.close()}>
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  )
}
