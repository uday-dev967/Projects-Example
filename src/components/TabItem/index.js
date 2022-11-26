import './index.css'

const TabItem = props => {
  const {tabDetails, onUpdate, isActive} = props
  const {displayText, tabId} = tabDetails
  const onClikcUpdateTabId = () => {
    onUpdate(tabId)
  }

  const activeButtonClassName = isActive ? 'active-tab-btn' : ' '

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeButtonClassName}`}
        onClick={onClikcUpdateTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
