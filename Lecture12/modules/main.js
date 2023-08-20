
// import { alert, demo, demo1, testing as bhaskar } from "./modules.js"
import * as access from "./modules.js"
import {default as fun} from "./modules.js"
import {demo5} from "./flyover.js"

console.log(access.alert);

access.demo(`Code4Education`);


console.log(access.demo1(`Code4Educcation`));

let a = new access.testing();
// let b = new bhaskar();

console.log(fun());


console.log(demo5());

