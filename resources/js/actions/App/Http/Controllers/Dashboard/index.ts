import HomeController from './HomeController'
import FormController from './FormController'

const Dashboard = {
    HomeController: Object.assign(HomeController, HomeController),
    FormController: Object.assign(FormController, FormController),
}

export default Dashboard