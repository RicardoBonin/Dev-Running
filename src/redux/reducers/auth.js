import { createReducer} from 'reduxsauce'
import { Types} from '../actionCreators'

export const INITIAL_STATE = {
  isAuthing: false,
  isAuth: false,
  isSigningin: false,
  user: {},
  error: false,
  errorMessage: ""
}
09:11