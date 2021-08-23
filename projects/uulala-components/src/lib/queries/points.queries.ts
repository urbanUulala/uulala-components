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
    `
}