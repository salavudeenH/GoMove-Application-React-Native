import AsyncStorage from '@react-native-async-storage/async-storage'
import { showMessage } from 'react-native-flash-message'
import readFavorite from './readFavorite'

const addToFavorite = async item => {
  const formerFavorite = await readFavorite()

  const arrayOfFavorite = formerFavorite || []

  try {
    const jsonValue = JSON.stringify([
      ...arrayOfFavorite,
      item
    ])
    await AsyncStorage.setItem('favorite', jsonValue)
    showMessage({
      message: `${item.Name} à bien été ajouté aux favoris`,
      type: 'success'
    })
  } catch (e) {
    showMessage({
      message: `une erreur est survenue`,
      descriptions: e.message,
      type: 'danger'
    })
  }
}

export default addToFavorite