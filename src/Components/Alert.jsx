import React from 'react'

const Alert = ({alerta}) => {
  return (
    <div className={`alert alert-${alerta.color} m-2`}> {alerta.msg}</div>
  )
}

export default Alert
