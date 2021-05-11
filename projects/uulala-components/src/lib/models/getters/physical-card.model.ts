export interface PhysicalCardsModel {
    id: number;
    physicalId: number;
    numberCard: string;
    numberCardOf?: string;
    proxyKey: string;
    retreivalRefNo: string;
    createdAt: Date;
    statusRequestCard: boolean; // Es para solicitar la tarjeta
    statusActivation: boolean; // este es saber si la tarjeta esta activa o no
    bulkId: string;
    typeCardId: number;
    frontCard: string;
    backCard: string;
    redesign: boolean;
    status: number;
    statusUulala: number;
    type?:string;
}