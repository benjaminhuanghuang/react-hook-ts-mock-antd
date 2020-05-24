
## Context


## Styles
styles/_variables.scss
```
  // menu
  $menu-border-width:            $border-width !default;
  $menu-border-color:            $border-color !default;
  $menu-box-shadow:              inset 0 1px 0 rgba($white, .15), 0 1px 1px rgba($black, .075) !default;
  $menu-transition:              color .15s ease-in-out, border-color .15s ease-in-out !default;

  // menu-item
  $menu-item-padding-y:          .5rem !default;
  $menu-item-padding-x:          1rem !default;
  $menu-item-active-color:       $primary !default;
  $menu-item-active-border-width: 2px !default;
  $menu-item-disabled-color:     $gray-600 !default;
```
Menu/_style.css
```

```

styles/index.scss
```
  @import "../components/Menu/style";
```


Submenu arrow animation
```
 .arrow-icon {
    transition: transform .25s ease-in-out;
    margin-left: 3px;
  }
  &:hover {
    .arrow-icon {
      transform: rotate(180deg);
    }
  }
```
## Test
Add test id to the component
```
  data-testid="test-menu"
```

Add css
```
  wrapper.container.append(createStyleFile())
```

Async 
```
  await wait(() => {
    expect(wrapper.queryByText('drop1')).toBeVisible()
  })
```