import { addRouter } from '../../../setting/routerBase2';
export class BaseControllers {
    constructor() {

    }
    testTs(config: string) {
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            console.log(config);
            console.log(target, propertyKey, descriptor);
        };
    }
}


export function routers(type: string, config: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        addRouter(type, config, target, propertyKey, descriptor);
    };
}
