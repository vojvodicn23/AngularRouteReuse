# Angular Route Reuse (Cashing)

Suported Angular versions: 16 and 17.

[Click here to try it on StackBlitz](https://stackblitz.com/edit/stackblitz-starters-3z8ma9)

## Usage
Add the package as a dependency to your project using:

```
npm install ngx-route-reuse
# or
pnpm install ngx-route-reuse
# or
yarn add ngx-route-reuse
```

Add module to you app.module imports:

```typescript
import { NgxRouteReuse } from 'ngx-route-reuse';
...
@NgModule({
    providers: [{provide: RouteReuseStrategy, useClass: NgxRouteReuse}],
    ...
})
```

Define reuseble components in route config:

```typescript
const routes: Routes = [
  {
    path: 'page1',
    component: Page1Component,
    data: {
      name: 'Page1',
      reuseRoute: true,
      reuseFromComponents: ['Page2'], // optional - if defined it will reuse component only from specific component
    },
  },
  {
    path: 'page2',
    component: Page2Component,
    data: {
      name: 'Page2',
      reuseRoute: true,
      //  if not defined it will reuse component comming from any
    },
  },
  {
    path: 'page3',
    component: Page3Component,
    // no route reuse
  },
  ...
];
  ```