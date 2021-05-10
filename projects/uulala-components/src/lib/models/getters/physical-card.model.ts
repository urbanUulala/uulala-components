export interface PhysicalCardsModel {
    id: number;
    physicalId: number;
    numberCard: string;
    proxyKey: string;
    retreivalRefNo: string;
    createdAt: Date;
    statusRequestCard: boolean;
    statusActivation: boolean;
    bulkId: string;
    typeCardId: number;
    frontCard: string;
    backCard: string;
    redesign: boolean;
    status: number;
    statusUulala: number;
}