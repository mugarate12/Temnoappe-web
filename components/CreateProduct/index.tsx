import {
  useState
} from 'react'
import { useRouter } from 'next/router'

import {
  Button,
  Card,
  Typography,
  TextField
} from '@mui/material'

import {
  useAlert,
  useProductsOperations
} from './../../hooks'

import styles from './CreateProduct.module.css'

export default function CreateProduct() {
  const productsOperations = useProductsOperations()
  const alertHook = useAlert()

  const router = useRouter()

  const [ name, setName ] = useState<string>('')
  const [ imageURL, setImageURL ] = useState<string>('')
  const [ description, setDescription ] = useState<string>('')

  const [ disableButton, setDisableButton ] = useState<boolean>(false)

  async function create() {
    if (!!name && !!imageURL && !!description) {
      setDisableButton(true)
      await productsOperations.create(name, imageURL, description)
      setDisableButton(false)
    } else {
      alertHook.showAlert('preencha todos os campos, por favor', 'warning')
    }
  }

  return (
    <Card
      component='form'
      elevation={1}
      sx={{ 
        minHeight: '200px',
        // maxHeight: '100%',
        minWidth: '100%',

        padding: '10px',

        display: 'flex',
        flexDirection: 'column',
        gap: '10px',

        backgroundColor: '#FFF'
      }}
      className={styles.container}
    >
      <Typography 
        component="h2"
        variant="h6" 
        sx={{
          fontWeight: 'bold'
        }}
      >
        Cadastrar novo produto
      </Typography>

      <TextField
        label="Nome do produto"
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
      />
      
      <TextField
        label="URL da imagem"
        value={imageURL}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setImageURL(event.target.value)}
      />
      
      <TextField
        label="descrição do produto"
        multiline={true}
        rows={4}
        value={description}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)}
      />

      <div className={styles.actions}>
        <Button 
          variant="contained" 
          color="success"
          sx={{
            width: '150px',
            alignSelf: 'flex-start'
          }}
          disabled={disableButton}
          onClick={() => create()}
        >
          salvar
        </Button>
        
        <Button 
          variant="contained" 
          color='inherit'
          sx={{
            width: '150px',
            alignSelf: 'flex-start',

            backgroundColor: '#FAFAFA',
            color: '#000'
          }}
          disabled={disableButton}
          onClick={() => router.push('/')}
        >
          cancelar
        </Button>
      </div>
    </Card>
  )
}