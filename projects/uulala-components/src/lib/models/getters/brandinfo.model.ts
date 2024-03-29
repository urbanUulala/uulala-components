import { LoginConfigBrand } from "./loginbrand.model";
import { RegisterConfigBrand } from "./registerbrand.model";
export interface BrandInfoModel {
    cssTheme: string;
    cssThemePanel?: string;
    imgCompany: string;
    iconImg: string;
    defaultCard: string;
    supportEmail:string;
    phones: string;
    address: string;
    iconCardSend: string;
    iconCardBus: string;
    imgCompanyLoginHeight: number;
    imgCompanyDashboardHeight: number;
    imgPhoneApp?: string;
    requestSiteUrl?: string;
    showAnimatedBackground?: boolean;
    login?: LoginConfigBrand;
    register?: RegisterConfigBrand;
}