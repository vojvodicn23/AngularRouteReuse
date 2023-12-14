import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

@Injectable()
export class NgxRouteReuseService extends RouteReuseStrategy {

  private storedRoutes = new Map<string, DetachedRouteHandle>();
  private previousRouteName: string | null = null;

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    //console.log(route.pathFromRoot.map(v => v.url.map(segment => segment.toString()).join('/')).join('/'));
    this.previousRouteName = route.data['name'];
    return (route.data['reuseRoute']);
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    const routePath = route.pathFromRoot.map(v => v.url.map(segment => segment.toString()).join('/')).join('/');
    if(routePath !== undefined){
        this.storedRoutes.set(routePath, handle);
    }
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const routePath = route.pathFromRoot.map(v => v.url.map(segment => segment.toString()).join('/')).join('/');
    const fromComponents = route.data['reuseFromComponents'];
    const currentComponentName = route.data['name'];

    /* if(currentComponentName === 'MatricesComponent'){
      this.storedRoutes.forEach((value: any) => {
        if(value){
          const componentRef: ComponentRef<any> = (value as any).componentRef;
          if(componentRef){
            componentRef.destroy();
          }
        }      
      });
      this.storedRoutes.clear();
    } */

    return (routePath !== undefined && this.storedRoutes.get(routePath) !== undefined &&
      (fromComponents ? fromComponents.includes(this.previousRouteName) : true));
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null  {
    const routePath = route.pathFromRoot.map(v => v.url.map(segment => segment.toString()).join('/')).join('/');  
    if(routePath !== undefined  && this.storedRoutes.get(routePath) !== undefined){
        return this.storedRoutes.get(routePath) as DetachedRouteHandle;
    }
    return null;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }
}
