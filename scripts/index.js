/**
 * index.js
 * - All our useful JS goes here, awesome!
 */
import {printMsg} from './module1.js';
//import {msg2, msg1 as msg3} from './module2.js';
//printMsg(msg3 + msg2);
import * as message from './module2.js';
printMsg(message.msg1 + message.msg2);

console.log("JavaScript is amazing!");