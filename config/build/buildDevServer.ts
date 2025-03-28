import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { BuildOptions } from './types'

export function buildDevServer (options:BuildOptions):DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    static: {
      directory: options.paths.src,
      publicPath: options.paths.public
    }
  }
}
