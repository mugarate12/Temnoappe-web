import { useRouter } from 'next/router'

import {
  Box,
  Typography
} from '@mui/material'

import {
  Inventory2
} from '@mui/icons-material'

import styles from './Header.module.css'

export default function Header() {
  const router = useRouter()

  return (
    <Box
      component='header'
      className={styles.container}
    >
      <Inventory2 
        sx={{ color: '#333' }} 
        className={styles.icon}
        onClick={() => router.push('/')}
      />

      <Typography 
        component="h1"
        variant="h1" 
        sx={{
          fontSize: '24px'
        }}
        className={styles.title}
        onClick={() => router.push('/')}
      >
        Dashboard
      </Typography>
    </Box>
  )
}