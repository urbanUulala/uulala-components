export interface LicenseModel {
    id: number;
    uuid: string;
    email: string;
    name: string;
    description: string;
    estimateAmount:number
    level: number;
    total: number;
    type: number;
    statusKraken: string;
    status: number;
    transactionId: string;
    approvedAmount: number;
    amountReferrer: number;
    percentageReferrer: number;
    amountSponsor: number;
    percentageSponsor: number;
    isPaid: boolean;
    licensesReferences?: LicenseModel[];
    currency: string;
    amountKraken: number;
}