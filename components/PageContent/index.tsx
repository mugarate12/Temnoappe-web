import { ReactNode } from 'react'
import classnames from 'classnames'

import styles from './PageContent.module.css'

interface Props {
  children?: ReactNode,
  className?: string
}

export default function PageContent({
  children,
  className
}: Props) {
  return (
    <main 
      className={classnames(
        className,
        styles.main
      )}
    >
      {children}
    </main>
  )
}