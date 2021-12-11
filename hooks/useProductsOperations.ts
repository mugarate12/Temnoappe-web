import { useRouter } from 'next/router'

import api from './../config/axios'

import {
  useAlert
} from './'

interface updateProductInterface {
  id: number,
  name?: string,
  description?: string,
  imageURL?: string
}

interface updatePayloadInterface {
  name?: string,
  description?: string,
  photo?: string
}

export default function useProductsOperations() {
  const router = useRouter()

  const alertHook = useAlert()

  async function create(name: string, imageURL: string, description: string) {
    await api.post('/products', {
      name,
      photo: imageURL,
      description
    })
      .then(response => {
        alertHook.showAlert('produto criado com sucesso!', 'success')
        router.push('/')
      })
      .catch(error => {
        alertHook.showAlert('erro ao criar produto, por favor, verifique as informações', 'success')
        console.log(error)
      })
  }

  async function update({ id, name, description, imageURL }: updateProductInterface) {
    let updatePayload: updatePayloadInterface = {}

    if (!!name && name.length > 0) {
      updatePayload.name = name
    }
    
    if (!!description && description.length > 0) {
      updatePayload.description = description
    }
    
    if (!!imageURL && imageURL.length > 0) {
      updatePayload.photo = imageURL
    }

    await api.put(`/products/${id}`, updatePayload)
      .then(response => {
        alertHook.showAlert('produto atualizado com sucesso!', 'success')
        router.push('/')
      })
      .catch(error => {
        alertHook.showAlert('erro ao atualizar produto, por favor, verifique as informações', 'error')
        console.log(error)
      })
  }

  async function remove(id: number) {
    await api.delete(`/products/${id}`)
      .then(response => {
        alertHook.showAlert('produto removido com sucesso!', 'success')
        router.push('/')
      })
      .catch(error => {
        alertHook.showAlert('erro ao remover produto, por favor, verifique as informações', 'error')
        console.log(error)
      })
  }
  
  return {
    create,
    update,
    remove
  }
}