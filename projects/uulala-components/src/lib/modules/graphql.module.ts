import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
  mutate: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  }
}

export const URL_API = new InjectionToken<string>('Url');


@NgModule({
  exports: [ApolloModule, HttpLinkModule],
})
export class GraphQLModule {
  static forRoot(urlInput:string): ModuleWithProviders<GraphQLModule> {
    return {
      ngModule: GraphQLModule,
      providers: [
        {provide: URL_API, useValue: () => urlInput},
        {
          provide: APOLLO_OPTIONS,
          useFactory: (httpLink: HttpLink, url:string) => {
            return {
              link: httpLink.create({uri:url}),
              cache: new InMemoryCache({resultCaching:false,addTypename:false}),
              defaultOptions: defaultOptions
            }
          },
          deps: [HttpLink, URL_API],
        },
      ],
    }
  }
}
