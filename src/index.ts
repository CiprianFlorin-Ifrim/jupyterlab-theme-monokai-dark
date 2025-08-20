import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-theme-monokai-dark:plugin',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    manager.register({
      name: 'Monokai Dark',
      displayName: 'Monokai Dark', 
      isLight: false,
      load: () => manager.loadCSS('jupyterlab-theme-monokai-dark/index.css'),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;