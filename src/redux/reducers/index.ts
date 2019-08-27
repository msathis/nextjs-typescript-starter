import { combineReducers } from 'redux'
import entities from './entities'
import loader from './loader'
import job from './job'

export default combineReducers({
    entities,
    loader,
    job,
})
