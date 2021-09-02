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
    `,
    GET_CRYPTO_VALUE: gql`
    query($token:String!,$symbol:String!) {
        getTickers(token:$token,symbol:$symbol)
        {
            symbol
            open
            high
            {
                valueToday
                value24H
            }
             low
            {
                valueToday
                value24H
            }
             trades
            {
                valueToday
                value24H
            }
             volumeWeightedAveragePrice
            {
                valueToday
                value24H
            }
             volume
            {
                valueToday
                value24H
            }
            lastTrade
            {
               price
               quantity
            }
           bestAsks
            {
                price
                lotQuantity
                quantity
            }
            bestBids
            {
                price
                lotQuantity
                quantity
            }
        }
    }
    `
    
}