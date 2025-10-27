declare global {
  namespace Microsoft.Extensions.Localization {
    class LocalizedString {
      name: string;

      value: string;

      resourceNotFound: boolean;

      searchedLocation: string | null;

      constructor(name: string, value: string);

      constructor(name: string, value: string, resourceNotFound: boolean);

      constructor(
        name: string,
        value: string,
        resourceNotFound: boolean,
        searchedLocation: string | null
      );
    }
  }
}

export {};
