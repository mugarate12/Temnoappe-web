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

import { useProductContext } from './../../context/ProductContext'

import styles from './UpdateProduct.module.css'

export default function UpdateProduct() {
  const { product } = useProductContext()

  const productsOperations = useProductsOperations()
  const alertHook = useAlert()

  const router = useRouter()

  const [ name, setName ] = useState<string>(product.name)
  const [ imageURL, setImageURL ] = useState<string>(product.photo)
  const [ description, setDescription ] = useState<string>(product.description)

  const [ disableButton, setDisableButton ] = useState<boolean>(false)

  async function updateProduct() {
    if (!!name && !!imageURL && !!description) {
      setDisableButton(true)
      await productsOperations.update({ id: product.id, name, imageURL, description})
      setDisableButton(false)
    } else {
      alertHook.showAlert('todos os campos devem ser preenchidos', 'warning')
    }
  }
  
  async function removeProduct() {
    setDisableButton(true)
    await productsOperations.remove(product.id)
    setDisableButton(false)
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
      <div>
        <Typography 
          component="h2"
          variant="h6" 
          sx={{
            fontWeight: 'bold'
          }}
        >
          Atualizar produto
        </Typography>

        <Typography 
          component="p"
          variant="subtitle2" 
          sx={{
            color: '#757575',
            fontWeight: '400'
          }}
        >
          {`#id: ${product.id}`}
        </Typography>
      </div>

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
          disabled={disableButton}
          sx={{
            width: '150px',
            alignSelf: 'flex-start'
          }}
          onClick={() => updateProduct()}
        >
          salvar
        </Button>

        <div className={styles.actions_secondary}>
          <Button 
            variant="contained" 
            color="error"
            disabled={disableButton}
            sx={{
              width: '150px',
              alignSelf: 'flex-start'
            }}
            onClick={() => removeProduct()}
          >
            excluir
          </Button>
          
          <Button 
            variant="contained" 
            color='inherit'
            disabled={disableButton}
            sx={{
              width: '150px',
              alignSelf: 'flex-start',

              backgroundColor: '#FAFAFA',
              color: '#000'
            }}
            onClick={() => router.push('/')}
          >
            cancelar
          </Button>

        </div>
      </div>

    </Card>
  )
}