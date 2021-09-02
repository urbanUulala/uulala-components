export interface RewardsConfigModel {
    year: number;
    description: string;
    enabled: boolean;
    interval: number;
    startDate: Date;
    startHours: string;
    endHours: string;
    dayRewards: number;
    mounthRewards: number;
    yearRewards: number;
}