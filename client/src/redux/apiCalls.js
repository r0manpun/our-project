import { loginFailure, loginStart, loginSuccess, logOut ,registerFailure, registerStart,registerSucess} from "./userRedux";
import { publicRequest } from "../requestMethods";

export const register = async(dispatch, user) => {
  dispatch(registerStart());
  try{
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSucess(res.data));
  }catch(err){
    dispatch(registerFailure());
  }
};
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const logout = (dispatch) => {
  dispatch(logOut());
};
