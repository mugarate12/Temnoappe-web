import type { NextPage } from 'next'
import Head from 'next/head'

import {
  PageContent,
  UpdateProduct
} from './../components'

import styles from './../styles/Update.module.css'

const Create: NextPage = () => {
  return (
    <>
      <Head>
        <title>Atualizar produto</title>
      </Head>

      <PageContent
        className={styles.main}
      >
        <UpdateProduct />
      </PageContent>
    </>
  )
}

export default Create