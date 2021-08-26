import { BrandInfoModel } from "./brandinfo.model";

export interface BrandModel {
    id: string;
    name: string;
    brandeo?: BrandInfoModel
    totalCards: number;
    urlLegalDocument1: string;
    urlLegalDocument2: string;
    termsAndConditions: string;
    privacyPolice: string;
}