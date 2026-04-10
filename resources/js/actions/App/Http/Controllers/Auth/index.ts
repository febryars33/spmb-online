import LoginController from './LoginController'
import RegisterController from './RegisterController'
import API from './API'

const Auth = {
    LoginController: Object.assign(LoginController, LoginController),
    RegisterController: Object.assign(RegisterController, RegisterController),
    API: Object.assign(API, API),
}

export default Auth