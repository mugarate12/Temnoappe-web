import {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch, 
  SetStateAction
} from 'react'

import { productsInterface } from './../interfaces/products'

interface ProductContextInterface {
  product: productsInterface,

  setProduct: Dispatch<SetStateAction<productsInterface>>
}

interface Props {
  children: any
}

const productContext = createContext<ProductContextInterface>({
  product: {
    id: 1,
    name: '',
    photo: '',
    description: ''
  },
  
  setProduct: () => {}
})

export default function ProductContextWrapper({
  children
}: Props) {
  const [ product, setProduct ] = useState<productsInterface>({
    id: 1,
    name: '',
    photo: '',
    description: ''
  })

  return (
    <productContext.Provider
      value={{
        product,

        setProduct
      }}
    >
      { children }
    </productContext.Provider>
  )
}

export function useProductContext() {
  const context = useContext(productContext)

  return context
}
