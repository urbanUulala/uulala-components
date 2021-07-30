export interface LicencesModel {
    Id: number;
    License: string;
    LevelLicense: number;
    Cost: number;
    UserId: string;
    CreatedDate: Date;
    AssignedDate: Date;
    status?: number;
}