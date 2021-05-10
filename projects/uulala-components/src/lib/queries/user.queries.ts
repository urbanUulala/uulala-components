import gql from "graphql-tag";

export const userQueries = {
  DELETE_USER_DEVICE: gql`
  mutation ($token:String!,$id:Int!){
    deleteDevice(token:$token,id:$id)    {
        id
    }
  }
  `,
  GET_USERS_DEVICE: gql`
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
  `,
  GET_USER_INFO_UUID: gql`
  query ($token:String!, $uuid:String!){
    getUserInfoUuid(token:$token, uuid:$uuid){
        id
        term
        status
        firstName
        lastName
        secondLastName
        avatarImage
        phoneNumber
        lada
        email
        clientId
        currency
    }
}
  `,

  GET_USER_COMPANIES: gql`
  query($token:String!, $filter:String!){
    getUserCompanies(token:$token, filter:$filter){
        company{
            number
            name
            totalBranch
            totalArea
            totalDepto
            totalEmployess
            totalActiveEmployess
            totalDesactiveEmployess
            totalPayrollTypes
            totalPayrollPeriods
            balance {
              year
              account
              deposit
              withdrawal
              total
              currency
            }
            groupCore{
              id
              pathLogo
              name
            }
            aditionalDescription
            idUulalaGroup
        }

    }
}
  `,
  GET_PAYROLL_TYPES_USER: gql`
    query($token:String!,$filter:String!){
        getPayrollTypes(token:$token, filter:$filter){
            number
            description
            filter
            periodicity
            isMasterGrouper
            handlesSecialSecurity
            leaveSalaryZero
            fiscalRegimeSat
            details {
              number
              grouperNumber
            }
        }
    }
  `,
  GET_USER_PHYSICAL_CARDS: gql`
  query($token:String!,$field:String!,$id:String!){
    getUsersByField(token:$token,field:$field,id:$id)
    {
      physicalCards {
        id
        physicalId
        numberCard
        proxyKey
        retreivalRefNo
        createdAt
        statusRequestCard
        statusActivation
        bulkId
        typeCardId
        frontCard
        backCard
        redesign
        status
        statusUulala
      }
    }
  }
  `,
  GET_USER_VIRTUAL_CARDS: gql`
  query($token:String!,$field:String!,$id:String!){
    getUsersByField(token:$token,field:$field,id:$id)
    {
      physicalCards {
        id
        customerId
        redemptionLink
        status
        transactionId
        expirationDate
        createdAt
      }
    }
  }
  `

}
