import { Container } from "../container.js";

export function Injectable(target:Function){ 
    Container.servicesRegistered.set(target.name, target)
}