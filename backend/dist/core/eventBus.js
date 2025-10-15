"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventBus = void 0;
class EventBus {
    constructor() {
        this.events = new Map();
    }
    subscribe(event, callback) {
        if (!this.events.has(event)) {
            this.events.set(event, []);
        }
        this.events.get(event).push(callback);
    }
    async emit(event, data) {
        const callbacks = this.events.get(event);
        if (!callbacks)
            return [];
        return Promise.all(callbacks.map((callback) => Promise.resolve(callback(data))));
    }
    unsubscribe(event) {
        this.events.delete(event);
    }
}
exports.eventBus = new EventBus();
