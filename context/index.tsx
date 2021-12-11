import AlertContextWrapper from "./AlertContext"
import ProductContext from './ProductContext'

interface Props {
  children: any
}

export default function ContextWrapper({
  children
}: Props) {
  return (
    <AlertContextWrapper>
      <ProductContext>
        { children }
      </ProductContext>
    </AlertContextWrapper>
  )
}