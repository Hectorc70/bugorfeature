
import packageJson from '../../package.json';

export const appVersion = packageJson.version;
export const baseApi = import.meta.env.VITE_BASE_API;
