import { Box, BoxSection, Page } from '@sone-dao/tone-react-containers'
import React from 'react'
import styles from './Registration.module.scss'

export interface IRegistrationProps {}

const Registration: React.FC<IRegistrationProps> = ({}) => {
  return (
    <Page style={{ backgroundColor: '#6F53BD' }}>
      <Box hat="#EFA9A9">
        <BoxSection style={{ padding: '1.5em' }}>
          <h5>Enter The Passphrase</h5>
          <p>
            An email with your passphrase was sent to{' '}
            <span style={{ fontWeight: 'bold' }}>geo@neo.leo</span>
          </p>
        </BoxSection>
        <BoxSection>
          <input
            className={styles.boxInput}
            placeholder="something-wicked-sick"
          />
        </BoxSection>
        <BoxSection style={{ padding: '1.5em' }}>
          <button className={styles.boxButton}>Continue with email</button>
        </BoxSection>
      </Box>
    </Page>
  )
}

export default Registration
