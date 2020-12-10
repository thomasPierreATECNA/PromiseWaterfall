# PromiseWaterfall


This code add a usefull method to promise prototype. 

## Context

Promise has a nativ method `all` that send a group of promise in parallel, and succeed if all promises succeed. There is also another method `race` that send a group of promise in a same time, but succeed when the first one succeed.

But there is no way to send a group of promises one after the other. This is what `waterfall` does !


### HowTo ?

Here's a group of promises : 

```js
const promiseA = () => new Promise((resolve, reject) => { setTimeout(() => { console.log('promise A succeed'); resolve(); }, 2000); });
const promiseB = () => new Promise((resolve, reject) => { setTimeout(() => { console.log('promise B succeed'); resolve(); }, 2000); });
const promiseC = () => new Promise((resolve, reject) => { setTimeout(() => { console.log('promise C succeed'); resolve(); }, 2000); });
const promiseD = () => new Promise((resolve, reject) => { setTimeout(() => { console.log('promise D succeed'); resolve(); }, 2000); });
const promiseE = () => new Promise((resolve, reject) => { setTimeout(() => { console.log('promise E succeed'); resolve(); }, 2000); });
const promiseF = () => new Promise((resolve, reject) => { setTimeout(() => { console.log('promise F succeed'); resolve(); }, 2000); });
const promiseG = () => new Promise((resolve, reject) => { setTimeout(() => { console.log('promise G succeed'); resolve(); }, 2000); });
const promiseH = () => new Promise((resolve, reject) => { setTimeout(() => { console.log('promise H succeed'); resolve(); }, 2000); });
const promiseI = () => new Promise((resolve, reject) => { setTimeout(() => { console.log('promise I succeed'); resolve(); }, 2000); });
const promiseJ = () => new Promise((resolve, reject) => { setTimeout(() => { console.log('promise J succeed'); resolve(); }, 2000); });
```

Here's an array of Promises :

```js
const requests = [promiseA, promiseB, promiseC, [promiseD, promiseE, promiseF], promiseG, [promiseH, promiseI], promiseJ];
```

As you can see, this array conatains promises and group of promise. Tou can send them all with :

```js
  Promise.waterfall(requests).then(doSomething).catch(doSomethingElse);
```

this will send A, then B, then, C, then D, E, and F at the same time, then G, the H and I at the same time, then J.

