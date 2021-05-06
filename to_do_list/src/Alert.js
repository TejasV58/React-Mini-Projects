import React, { useEffect } from 'react'

const Alert = (props) => {
  return <div className={`alert ${props.msgClass}`}>
    {props.msg}
  </div>
}

export default Alert
