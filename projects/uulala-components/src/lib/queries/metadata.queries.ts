import gql from "graphql-tag";

export const metadataQueries = {
    GET_DATA_FROM_GRID: gql`
    query ($token:String!,$filter:String!,$table:String!){
        getDatas(token:$token, id:$table,filter:$filter){
            tableId
            table
            propertiesJson
            gridJson
            buttonsJson
        }
        
    }
    `,
    GET_DATA_FROM_MODAL: gql`
    query ($token:String!, $table:String!, $keys:[ColumnInputType]!){
        getData(token:$token, id:$table, keys:$keys){
           tableId
           table
           panelDataJson
           propertiesUIJson
        }
    }
    `
}