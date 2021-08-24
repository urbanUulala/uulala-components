import gql from "graphql-tag";

export const pointsQueries = {
	GET_POOL_BALANCE: gql`
    query($token:String!,$id:Int!, $pool: Int!) {
        getBalanceTokens(token:$token,id:$id,pool:$pool){
            account
            deposit
            withdrawal
            total
        }
        
    }
    `,
    CREATE_POOL_TRANSACTION_BY_TOKEN_ADDRESS: gql `
    mutation($token: String!,$withdrawalAddress: String!, $withdrawalPool: Int!,$depositAddress: String!,$depositPool: Int!,$amount: Float!$transactionDate: DateTime! $note: String!){
        createPoolTransactionByTokenAddress(token: $token, withdrawalAddress: $withdrawalAddress, withdrawalPool: $withdrawalPool, depositAddress: $depositAddress, depositPool: $depositPool, amount: $amount, transactionDate: $transactionDate, note: $note){
            id
        }
    }
    `,
    CREATE_POOL_TRANSACTION_BY_TOKEN_ADDRESS_TO_CLIENT: gql `
    mutation($token: String!,    $withdrawalAddress: String!,     $withdrawalPool: Int!,    $amountAddress: Float!,    $depositClient: String!,    $depositPool: Int!,    $amountClient: Float!    $transactionDate: DateTime!,    $note: String!){
        createPoolTransactionByTokenAddressToClient(token: $token,     withdrawalAddress: $withdrawalAddress,     withdrawalPool: $withdrawalPool,     amountAddress: $amountAddress,     depositClient: $depositClient,     depositPool: $depositPool,     amountClient: $amountClient,     transactionDate: $transactionDate,     note: $note){
            id
        }
    }`


    
}

