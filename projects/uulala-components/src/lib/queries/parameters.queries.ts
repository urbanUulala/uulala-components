import gql from "graphql-tag";

export const parametersQueries = {
    GET_PARAMETER_BY_COMPANY: gql`
    query ($token:String!,$filter:String!,$company:Int!){
        getParametersByCompany(token:$token,filter:$filter,company:$company){
            companyNumber
           name
           value
        }
        
    }
    `
}