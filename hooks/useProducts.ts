import { 
  useState,
  useEffect
} from "react"

import api from './../config/axios'

import { productsInterface } from './../interfaces/products'

interface getProductsInterface {
  data: Array<productsInterface>
}

export default function useProducts() {
  const [ products, setProducts ] = useState<Array<productsInterface>>([])

  async function getProducts() {
    await api.get<getProductsInterface>('/products')
      .then(response => {
        setProducts(response.data.data)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getProducts()
  }, [])

  return products
}