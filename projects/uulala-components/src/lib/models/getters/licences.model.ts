export interface LicensesModel {
    id: number;
    license: string;
    levelLicense: number;
    cost: number;
    userId: string;
    createdDate: Date;
    assignedDate: Date;
    status: number;
}