// Config imports and setup help from https://stackoverflow.com/questions/55267494/the-uri-parameter-to-openuri-must-be-a-string-got-undefined

import { config } from 'dotenv';
import path from 'path';
import url from 'url';
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
config({ path: path.resolve(__dirname, './.env') });