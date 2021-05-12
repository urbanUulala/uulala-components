import gql from "graphql-tag";

export const restQueries = {
	REST_API: gql`
    query ($url:String!,$user:String!,$key:String!,$method:String!,$inputs:String!,$methodtype:Int!){
        restApi(url:$url,user:$user,key:$key,method:$method,inputs:$inputs,methodtype:$methodtype)
    }
    `
}