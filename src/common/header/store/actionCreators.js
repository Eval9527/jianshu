import * as constants from './constants'
import axios from 'axios'
import { fromJS } from "immutable";

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data)
})

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})

export const getList = () => {
  return (dispath) => {
    axios.get('/api/header-list.json')
        .then((res) => {
          const data = res.data
          dispath(changeList(data.data))
        })
        .catch( () => {
          console.log('error')
        })
  }
}
