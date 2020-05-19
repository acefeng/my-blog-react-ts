const router = require('koa-router')();

// router.get(item[1], obj[item[3]].bind(obj));
let controllerList = {

};
function addRouter(type: string, url: string, target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // console.log(target);
    // console.log(url, target, propertyKey);
    // const item = new target();
    descriptor.value();
    router.get(url, descriptor.value);
    router.get('/request_test', function(ctx: any) {
        // do something
    })
}
function getRouter() {
    
}
export {
    router,
    addRouter
}
