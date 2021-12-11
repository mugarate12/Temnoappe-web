import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import {
  PageContent,
  ProductsList
} from './../components'

import {
  Button
} from '@mui/material'

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <PageContent>
        <ProductsList />

        <Button 
          variant="contained" 
          color="success"
          sx={{
            width: '150px',
            alignSelf: 'flex-start'
          }}
          onClick={() => router.push('/create')}
        >
          novo produto
        </Button>
      </PageContent>
    </>
  )
}

export default Home
