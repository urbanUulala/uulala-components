import gql from "graphql-tag";


export const contactQueries = {
  SET_MESSAGE_PROCESS: gql`
	mutation($token:String!, $process:MessageParameterInputType!){
    setMessageProcess(token:$token,process: $process){
        id
        description
        status
        fBDocument
    }
	}`
}