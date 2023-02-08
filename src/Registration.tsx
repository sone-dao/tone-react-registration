import { Page } from '@sone-dao/tone-react-containers'
import React from 'react'
import EmailPassphraseBox from './components/EmailPassphraseBox'
import styles from './Registration.module.scss'

export interface IRegistrationProps {}

const Registration: React.FC<IRegistrationProps> = ({}) => {
  return (
    <Page className={styles.page}>
      <EmailPassphraseBox />
    </Page>
  )
}

export default Registration
