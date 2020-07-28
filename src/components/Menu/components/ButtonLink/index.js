import React from 'react'

function ButtonLink ({href, className, children}) {
  return (
    <div>
      <nav>
        <a href={href} className={className}>
          {children}
        </a>
      </nav>
    </div>
  )
}

export default ButtonLink
