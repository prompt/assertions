# Assertions

A collection of assertions for [Assert][pr-mpt/actions-assert].

| Reference | Description |
| :-------- | :---------- |
| [`npm://@assertions/is-strictly-equal`][@assertions/is-strictly-equal] | `actual` is the same value and type as `expected` |
| [`npm://@assertions/is-equal`][@assertions/is-equal] | `actual` has the same value as `expected` |
| [`npm://@assertions/starts-with`][@assertions/starts-with] | `actual` starts with `expected` |
| [`npm://@assertions/directory-exists`][@assertions/directory-exists] | path `expected` exists and is a directory |

## Monorepo using npm Workspaces

This monorepo organises assertions into separate npm packages by directory, each
managed as an npm [workspace][npm/workspaces]. Run an `npm` command against one
or more package using the `-w|--workspace` parameter or `--workspaces` for all.

```console
dev:~$ npm run test -w @assertions/is-equal
dev:~$ npm run test -w @assertions/is-equal -w @assertions/directory-exists
dev:~$ npm run test --workspace @assertions/is-equal
dev:~$ npm run test --workspaces
```

[pr-mpt/actions-assert]: https://github.com/pr-mpt/actions-assert
[@assertions/is-strictly-equal]: https://www.npmjs.com/package/@assertions/is-strictly-equal
[@assertions/is-equal]: https://www.npmjs.com/package/@assertions/is-equal
[@assertions/starts-with]: https://www.npmjs.com/package/@assertions/starts-with
[@assertions/directory-exists]: https://www.npmjs.com/package/@assertions/directory-exists
[npm/workspaces]: https://docs.npmjs.com/cli/v7/using-npm/workspaces
