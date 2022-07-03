# Assert Equivalent HTML

Assert that `actual` is equivalent to the `expected` HTML. The equivalence check
ignores whitespace, compares element tags case-insensitively and permits
element attributes to be out of order.

```yaml
- uses: pr-mpt/actions-assert@v3
  with:
    assertion: npm://@assertions/equivalent-html
    expected: '<html><h1>Hello, World!</h1></html>'
    actual: '<html>   <h1>Hello, World!</h1>  </html>'
```

Part of the [assertions][@assertions] foundation collection.

## HTTP Request Example

```yaml
- name: Perform example request
  id: request
  uses: CamiloGarciaLaRotta/watermelon-http-client@v1
  with:
    url: 'https://www.example.com'
- name: Load example fixture
  id: fixture
  uses: juliangruber/read-file-action@v1
  with:
    path: example.com.fixture.html
- name: Test example.com matches fixture
  uses: pr-mpt/actions-assert@v3
  with:
    assertion: npm://@assertions/equivalent-html
    actual: '${{ fromJSON(steps.request.outputs.response) }}'
    expected: '${{ steps.fixture.outputs.content }}'
```

[@assertions]: https://github.com/pr-mpt/assertions
