import { createContext } from 'react';
import { i18n } from './i18n';
import { getDefaultFont, Plugins, UIOptions } from '@pmee/common';
import { builtInPlugins } from '@pmee/schemas';

export const I18nContext = createContext(i18n);

export const FontContext = createContext(getDefaultFont());

export const PluginsRegistry = createContext<Plugins>(builtInPlugins);

export const OptionsContext = createContext<UIOptions>({});
