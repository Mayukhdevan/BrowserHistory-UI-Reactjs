import './index.css'

const HistoryItem = props => {
  const {siteHistory, removeHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = siteHistory
  const onDelete = () => removeHistory(id)

  return (
    <li className="list-item">
      <p className="time-accessed-text">{timeAccessed}</p>
      <div className="content-wrapper">
        <div className="logo-title-url-container">
          <img className="domain-logo" src={logoUrl} alt="domain logo" />
          <div className="domain-texts">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <button
          type="button"
          data-testid="delete"
          onClick={onDelete}
          className="delete-button"
        >
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
