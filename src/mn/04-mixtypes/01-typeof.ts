// import { average } from '../01-basics/02-functions';
import { average } from "../01-basic-types/02-functions";

let str = "Hello World";
type x = typeof str;

type fn = typeof average;

const max: fn = (...numbers) => Math.max(...numbers);
max(1, 2, 3);

//
type returnFn = ReturnType<typeof average>;
