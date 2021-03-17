import gql from "graphql-tag";

export const acumulatedQueries = {
    GET_ANUAL_BALANCES: gql`
    query($token:String!,$startyear:Int!,$endyear:Int!) {
        getAnnualBalance(token:$token,startyear:$startyear,endyear:$endyear){
             year
             typeDescription
             concept
             description
             january
             february
             march
             april
             may
             june
             july
             august
             september
             october
             november
             december
             total
        }
        
    }
    `
}