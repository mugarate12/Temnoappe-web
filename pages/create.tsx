import type { NextPage } from 'next'
import Head from 'next/head'

import {
  CreateProduct,
  PageContent
} from './../components'

import styles from './../styles/Create.module.css'

const Create: NextPage = () => {
  return (
    <>
      <Head>
        <title>Criar produto</title>
      </Head>

      <PageContent
        className={styles.main}
      >
        <CreateProduct />
      </PageContent>
    </>
  )
}

export default Create