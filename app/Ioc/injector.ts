import 'reflect-metadata'
import { Container } from './container';
export class Injector {
    static ResolveService<T>(service: Function): T {
        const parameters = Reflect.getMetadata('design:paramtypes', service);
        if(!Container.servicesRegistered.get(service.name)){
            throw new Error(`Service ${service.name} not registered`);
        }
        const servicesToInject: any[] = [];
        if (parameters) {
            for (const param of parameters) {
                servicesToInject.push(this.ResolveService(Container.servicesRegistered.get(param.name)));
            }
            return Reflect.construct(service, servicesToInject);
        } else {
            return Reflect.construct(service, []);
        }
    }
}