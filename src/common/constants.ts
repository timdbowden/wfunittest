/* tslint:disable:max-classes-per-file */
import { Utils } from './utils';

export class Config {
  public static readonly baseApiUrl: string = (Utils.getQSParam('useMockApi') === 'true') ? 'http://localhost:3001/' : '/api/';

  public static System = class {
    public static readonly tagsSeparator: string = '_';
  };

  public static Azure = class AzureConfig {
    public static readonly queryKey: string = '8DA37E78AD531356E7D768932D485ED3';
    public static readonly baseUrl: string = 'https://meroscontract.search.windows.net/';
    public static readonly searchQueryUrl: string = AzureConfig.baseUrl + 'indexes/{0}/docs/search?api-version=2016-09-01';
    public static readonly searchSuggestionsUrl: string = AzureConfig.baseUrl + 'indexes/{0}/docs/suggest?api-version=2016-09-01';
    public static readonly queryDocsUrl: string = AzureConfig.baseUrl + 'indexes/{0}/docs?api-version=2016-09-01';
  };

  public static Projects = class {
    public static readonly StateNames: string[] = ['Draft', 'Active', 'Deleted'];
  };
}

export class AdminConfig extends Config {
  public static Azure = class extends Config.Azure {
    public static readonly adminKey: string = '8DA37E78AD531356E7D768932D485ED3';
    public static readonly indexesUrl: string = Config.Azure.baseUrl + 'indexes/{0}?api-version=2016-09-01';
    public static readonly docsUrl: string = Config.Azure.baseUrl + 'indexes/{0}/docs/index?api-version=2016-09-01';
  };

  public static SQL = class {
    public static readonly host: string = 'meroscontract.database.windows.net';
    public static readonly database: string = 'meroscontract';
    public static readonly user: string = 'merossa';
    public static readonly password: string = 'Password01*';
  };
}

export enum ProjectStates {
  Draft,
  Active,
  Deleted
}