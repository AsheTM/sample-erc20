import { TCoreConfigurationRoot } from "src/app/core";
import { TSharedConfigurationRoot } from "src/app/shared";


export type TEnvironment = {
  production: boolean;
  configuration: TEnvironmentConfiguration;
};

export type TEnvironmentConfiguration = {
  core: TCoreConfigurationRoot;
  shared: TSharedConfigurationRoot;
};
