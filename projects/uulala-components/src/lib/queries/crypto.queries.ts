import gql from 'graphql-tag';

export const cryptoQueries = {
    GET_CRYPTO_ADDRESS: gql`
    query ($token:String!,$currencyId:Int!)
    {  
        getCryptoCurrencyAddress(token:$token,currencyId:$currencyId)
        {
            id
            address
            description
            status
            
        }
    }
    `
    
}