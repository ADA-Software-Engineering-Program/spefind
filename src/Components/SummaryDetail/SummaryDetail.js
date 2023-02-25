import React from 'react'
import './SummaryDetail.css'

const SummaryDetail = ({ detailHead, detailSummary }) => {
  return (
    <div className="summary">
        <h3>{detailHead}</h3>
        <p>{detailSummary}</p>
    </div>
  )
}

export default SummaryDetail