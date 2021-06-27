# Assert True

Assert that `actual` is a string equal to a YAML boolean true (one of `true`
`True` `TRUE`[1])

```yaml
- uses: pr-mpt/actions-assert@v3
  with:
    assertion: npm://@assertions/is-true
    actual: "${{ steps.condition.outputs.result }}"
```

Part of the [assertions][@assertions] foundation collection.

[1] YAML Specification [Core Schema][yaml/core]

[@assertions]: https://github.com/pr-mpt/assertions
[github/workspace]: https://docs.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions#github-context
[yaml/core]: https://yaml.org/spec/1.2/spec.html#id2804923
