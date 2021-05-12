import gql from "graphql-tag";

export const restQueries = {
	REST_API: gql`
    query ($url:String!,$token:String!,$method:String!,$inputs:String!,$methodtype:Int!){
        restApiToken(url:$url,token:$token,method:$method,inputs:$inputs,methodtype:$methodtype)
    }
    `
}