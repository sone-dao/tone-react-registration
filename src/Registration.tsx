import { pub } from '@sone-dao/sone-react-utils'
import { Page } from '@sone-dao/tone-react-containers'
import React, { useEffect } from 'react'
import EmailPassphraseBox from './components/EmailPassphraseBox'
import styles from './Registration.module.scss'

export interface IRegistrationProps {}

const Registration: React.FC<IRegistrationProps> = ({}) => {
  useEffect(() => {
    useEffect(() => {
      pub('__TONE_EVENTS__', 'helmet.hide', true)
      return () => pub('__TONE_EVENTS__', 'helmet.hide', false)
    }, [])
  }, [])
  return (
    <Page className={styles.page}>
      <EmailPassphraseBox />
    </Page>
  )
}

export default Registration
