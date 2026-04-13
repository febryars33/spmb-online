import Auth from './Auth'
import RegencyController from './RegencyController'
import DistrictController from './DistrictController'
import SubDistrictController from './SubDistrictController'
import HomeController from './HomeController'
import FaqController from './FaqController'
import XenditTestController from './XenditTestController'
import Dashboard from './Dashboard'
import DocumentUploadController from './DocumentUploadController'

const Controllers = {
    Auth: Object.assign(Auth, Auth),
    RegencyController: Object.assign(RegencyController, RegencyController),
    DistrictController: Object.assign(DistrictController, DistrictController),
    SubDistrictController: Object.assign(SubDistrictController, SubDistrictController),
    HomeController: Object.assign(HomeController, HomeController),
    FaqController: Object.assign(FaqController, FaqController),
    XenditTestController: Object.assign(XenditTestController, XenditTestController),
    Dashboard: Object.assign(Dashboard, Dashboard),
    DocumentUploadController: Object.assign(DocumentUploadController, DocumentUploadController),
}

export default Controllers