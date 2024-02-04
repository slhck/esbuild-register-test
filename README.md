# esbuild-register Test

This is a minimal test of the esbuild-register package behaving differently compared to `ts-node` or `tsx` when used with `es2021` syntax.

Run:

```
npm install
```

Then:

```bash
npm run start:esbuild
npm run start:ts-node
npm run start:tsx
npm run start:ts
```

You will see that the `esbuild-register` version does not work as expected and prints `undefined`.

When using `es2022` syntax, the whole TypeScript file is invalid. You can see this with:

```console
$ npm run start:ts-es2022

> esbuild-register-test@1.0.0 start:ts-es2022
> tsc --target es2022 && node index.js

index.ts:3:15 - error TS2729: Property 'bar' is used before its initialization.

3     bar: this.bar,
                ~~~

  index.ts:6:15
    6   constructor(private readonly bar: string) {}
                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    'bar' is declared here.


Found 1 error in index.ts:3
```
