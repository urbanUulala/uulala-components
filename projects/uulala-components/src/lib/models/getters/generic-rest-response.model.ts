export interface GenericRestResponse {
    code: number;
    request_id: string;
    request_ip: string;
    url: string;
    status: string;
    method: string;
    service: string;
    data: any;
}
