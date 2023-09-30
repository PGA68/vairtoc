/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
//
/*   Since You Needed DOM, if it true   */

import { version } from "process";

const fs =  import.meta.file;

const dir = import.meta.dir;



console.log("Hello via Bun!", { Bun: version });
