import gql from "graphql-tag";

export const uiQueries = {
	GET_BRAND_INFO: gql`
    query ($id:Int!){
        getBrandCompany(id:$id) {
            id
            name
            brandeo
            urlLegalDocument1
            urlLegalDocument2
            termsAndConditions
            privacyPolice
        }
    }
    `
}