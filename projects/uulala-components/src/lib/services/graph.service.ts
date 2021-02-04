import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { FetchPolicy } from 'apollo-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(
    private apollo: Apollo
  ) { }

  execQuery(objectQuery: any, inputVariables: any, fetchPolicyType: FetchPolicy = "no-cache") {
    return this.apollo.query({
      query: objectQuery,
      variables: inputVariables,
      errorPolicy: 'all',
      fetchPolicy: fetchPolicyType
    });
  }

  execQueryType<T>(objectQuery: any, inputVariables: any, fetchPolicyType: FetchPolicy = "no-cache") {
    return this.apollo.query<T>({
      query: objectQuery,
      variables: inputVariables,
      errorPolicy: 'all',
      fetchPolicy: fetchPolicyType
    });
  }

  execMutation(objectQuery, inputVariables) {
    return  this.apollo.mutate({
      mutation: objectQuery,
      variables: inputVariables,
      errorPolicy: 'all'
    });

  }

  // execMutation(objectQuery, inputVariables) {
  //   return this.apollo.mutate({
  //     mutation: objectQuery,
  //     variables: inputVariables,
  //     errorPolicy: 'all'
  //   });

}
