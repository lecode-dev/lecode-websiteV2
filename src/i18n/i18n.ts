import { createInstance, type i18n } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { i18nConfig } from './i18n-config';

export async function initTranslations(locale: string, namespaces: string[], i18nInstance?: i18n, resources?: any) {
  const newInstance = i18nInstance ?? createInstance();

  newInstance.use(initReactI18next);

  if (!resources) {
    newInstance.use(
      resourcesToBackend((language: string, namespace: string) => import(`@/locales/${language}/${namespace}.json`)),
    );
  }

  await newInstance.init({
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: resources ? [] : i18nConfig.locales,
  });

  return {
    i18n: i18nInstance,
    resources: newInstance.services.resourceStore.data,
    t: newInstance.t,
  };
}