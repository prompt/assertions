# Assert Directory Exists

Assert that `expected` is a directory. Paths are relative to the
[GitHub Workspace][github/workspace] unless `expected` is an absolute path.

```yaml
- uses: pr-mpt/actions-assert@v2
  with:
    assertion: npm://@assertions/directory-exists
    expected: "path/to/directory"
```

Part of the [assertions][@assertions] foundation collection.

[@assertions]: https://github.com/pr-mpt/assertions
[github/workspace]: https://docs.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions#github-context
