import React from 'react'

export default function Alert(props) {
    const capitalizeFirst = (str) => {
        const lower = str.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
             <div style={{height:4+'em'}} >
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show text-center fs-6`} role="alert">
                <strong>{capitalizeFirst(props.alert.type)}</strong>-{props.alert.msg}
               </div>
            }
            </div>
       
    )
}
