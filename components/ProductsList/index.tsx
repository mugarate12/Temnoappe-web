import { useRouter } from 'next/router'

import {
  Card,
  Typography
} from '@mui/material'

import {
  useProducts
} from './../../hooks'

import { useProductContext } from './../../context/ProductContext'

import { productsInterface } from './../../interfaces/products'

import styles from './ProductsList.module.css'

export default function ProductsList() {
  const { setProduct } = useProductContext()

  const products = useProducts()
  const router = useRouter()

  function goToUpdateProduct(product: productsInterface) {
    setProduct(product)
    router.push('/update')
  }

  function renderProducts() {
    return products.map((product, index) => {
      return (
        <tr 
          className={styles.product_container}
          key={String(index)}
          onClick={() => goToUpdateProduct(product)}
        >
          <td className={styles.product_image_td}>
            <img 
              src={product.photo}
              alt="product image"
              className={styles.product_image}
            />
          </td>
          <td className={styles.product_name}>{product.name}</td>
          <td className={styles.product_description}>{product.description}</td>
        </tr>
      )
    })
  }

  return (
    <Card
      elevation={1}
      sx={{ 
        minHeight: '200px',
        // maxHeight: '100%',
        minWidth: '100%',

        padding: '10px',

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
        Produtos
      </Typography>
      
      <Typography 
        component="p"
        variant="subtitle2" 
        sx={{
          color: '#757575',
          fontWeight: '400'
        }}
      >
        Clique em um produto para editá-lo
      </Typography>

      <table className={styles.table}>
        <thead className={styles.table_header}>
          <th className={styles.photo_th} >Foto</th>
          <th className={styles.name_th} >Nome</th>
          <th className={styles.description_th}>Descrição</th>
        </thead>

        <tbody className={styles.table_body}>
          {renderProducts()}
        </tbody>
      </table>
    </Card>
  )
}