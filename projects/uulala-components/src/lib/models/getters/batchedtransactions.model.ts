export interface BatchedTransaction {
    id: number;
    status: number;
    reference: string;
    address: string;
    amount: number;
    description: string;
    referenceTrx: string;
    verifyTrx: number;
    fee: number;
    feeTotal: number;
    transactionType: number;
    authorizeDecline: Date;
    voucherCrypto: string;
    addressCrypto: string;
    currencyCrypto: string;
    createdDate: Date
    transactionId: string;
}