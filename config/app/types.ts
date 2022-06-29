// Todo: change the link
import { CountryType, LocaleType } from "/Volumes/Projects/Ooneex/Core/Translation/mod.ts";

export type AppEnvType = "dev" | "prod" | "test" | "demo";
export type AppType = "api" | "react";
export type AppVersionType = `${number}.${number}.${number}`;
export type AppLocaleType = LocaleType;
export type AppCountryType = CountryType;
export type AppAllowedHostType = string[];

export type AppConfigType = {
	env: AppEnvType;
	locale: AppLocaleType;
	country: AppCountryType;
	type: AppType;
	version: AppVersionType;
	secret: string;
	allowedHosts: AppAllowedHostType;
	isDDD: boolean;
} & Record<string, string | number | boolean>;

export interface IAppConfig {
	getEnv(): AppEnvType;
	getLocale(): AppLocaleType;
	getCountry(): AppCountryType;
	getType(): AppType;
	getVersion(): AppVersionType;
	getVersion(): AppVersionType;
	getSecret(): string;
	getAllowedHosts(): AppAllowedHostType;
	isDDD(): boolean;
	get<T>(key: keyof AppConfigType): T;
}
