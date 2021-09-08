export interface RewardsConfigModel {
    id: number;
    groupid: number;
    description: string;
    startDate: Date;
    endDate: Date;
    amount: number;
    isClose: boolean;
}