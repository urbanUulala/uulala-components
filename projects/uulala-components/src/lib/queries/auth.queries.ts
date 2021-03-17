import gql from "graphql-tag";


export const authQueries = {
  GET_LOGIN_SOCIETIES: gql`
        query($token:String!, $language:Int!, $id:String!, $utcOffsetMinutes:Int!){
            getLogginSocieties(token:$token, language: $language, id: $id, utcOffsetMinutes: $utcOffsetMinutes){
              token
              timeOut
              societies
              {
                  value,
                  name
              }
            }
        }
    `,
  GET_LOGIN: gql`
  query ($token:String!,$id:Int!){
    getLoggin(token: $token, id:$id){
      token
      uuid
      timeOut
      locked
      company
      payrollType
    }
  }
  `,
  VALIDATE_SESSION: gql`
  query($token:String!){
    getValidateSession(token:$token){
      token
      uuid
      timeOut
      locked
      company
      payrollType
    }
  }`,
  GET_VALIDATE_PWD: gql`
  query ($token:String!,$password:String!){
    getValidatePwd(token: $token,password:$password)
  }`,
  SETLOCKEDTOKEN: gql`
  mutation($token:String!){
    setLockedToken(token:$token)
  }`,
  LOGOUT: gql `
  query($token:String!){
    getLogout(token:$token){
      token
      uuid
      timeOut
      locked
    }
  }
  `,
  VALIDATE_PAYROLL_SESSION: gql`
  query($token:String!){
      getValidateSession(token:$token){
          
          company
          payrollType
        }
    }
  `,
  SET_LOGIN_INPUT: gql `
  mutation($token:String!,$logginInfo:LogginInputType!)
  {
    setLogginInput(token:$token,logginInfo:$logginInfo)
    {
        token
    }
  }
  `,
  GET_USER_MENU: gql `
  query ($token:String!){
    getUserMenus(token:$token){
      key
      parent
      description
      level
      url
      childs {
          key
          parent
          description
          level
          url
      }
    }  
  }
  `
}
