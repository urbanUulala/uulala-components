import gql from "graphql-tag";

export const userQueries = {
  DELETE_USER_DEVICE: gql`
  mutation ($token:String!,$id:Int!){
    deleteDevice(token:$token,id:$id)    {
        id
    }
  }
  `,
  GET_USERS_DEVICE: gql `
  query($token:String!,$field:String!,$id:String!){
    getUsersByField(token:$token,field:$field,id:$id){
      devices {
        id
        ipAddress
        deviceName
        status
        product
        browserId
        register
      }
    }
  }
  `,
  GET_USER_BY_FIELD: gql`
  query($token:String!,$field:String!,$id:String!){
    getUsersByField(token:$token,field:$field,id:$id)
    {
        id
        email
        phoneNumber
        lada
        usersProfile
        {
            userID
            id
            status
            name
            accountId
            roleId
            accounts
            {
                id
                term
                status
                firstName
                avatarImage
                lastName
                secondLastName
                phoneNumber
                middleName
                email
                clientId
                currency
                gender
                alias
                birthday
                nationalId
                otherNationalId
                countryCode
                externalId
                customerId
                  address
                  {
                      id
                      city
                      suburb
                      country
                      state
                      street
                      number
                      typeAddress
                      zipCode
                      shortName
                  }
                  kyc{
                    id
                    typeIdentification
                    frontId
                    backId
                    kycid
                    faceId
                    documentId
                    status
                  }
                  bankInformation
                  {
                    id
                    bankName
                    routingNumber
                    accountNumber
                  }
            }

        }
    }
  }
  `

}
