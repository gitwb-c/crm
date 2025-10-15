type EventCallback<T = any, R = any> = (data?: T) => R;

class EventBus {
  private events: Map<string, EventCallback[]> = new Map();

  subscribe<T = any, R = any>(event: string, callback: EventCallback<T, R>) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event)!.push(callback);
  }

  async emit<T = any, R = any>(event: string, data?: T): Promise<R[]> {
    const callbacks = this.events.get(event);
    if (!callbacks) return [];
    return Promise.all(
      callbacks.map((callback) => Promise.resolve(callback(data)))
    );
  }

  unsubscribe(event: string) {
    this.events.delete(event);
  }
}

export const eventBus = new EventBus();
