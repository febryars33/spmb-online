import Auth from './Auth'
import HomeController from './HomeController'
import DocumentUploadController from './DocumentUploadController'
import FaqController from './FaqController'
import Dashboard from './Dashboard'

const Controllers = {
    Auth: Object.assign(Auth, Auth),
    HomeController: Object.assign(HomeController, HomeController),
    DocumentUploadController: Object.assign(DocumentUploadController, DocumentUploadController),
    FaqController: Object.assign(FaqController, FaqController),
    Dashboard: Object.assign(Dashboard, Dashboard),
}

export default Controllers