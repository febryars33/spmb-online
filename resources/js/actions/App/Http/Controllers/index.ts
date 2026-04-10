import Auth from './Auth'
import RegencyController from './RegencyController'
import DistrictController from './DistrictController'
import SubDistrictController from './SubDistrictController'
import HomeController from './HomeController'
import DocumentUploadController from './DocumentUploadController'
import FaqController from './FaqController'
import Dashboard from './Dashboard'

const Controllers = {
    Auth: Object.assign(Auth, Auth),
    RegencyController: Object.assign(RegencyController, RegencyController),
    DistrictController: Object.assign(DistrictController, DistrictController),
    SubDistrictController: Object.assign(SubDistrictController, SubDistrictController),
    HomeController: Object.assign(HomeController, HomeController),
    DocumentUploadController: Object.assign(DocumentUploadController, DocumentUploadController),
    FaqController: Object.assign(FaqController, FaqController),
    Dashboard: Object.assign(Dashboard, Dashboard),
}

export default Controllers