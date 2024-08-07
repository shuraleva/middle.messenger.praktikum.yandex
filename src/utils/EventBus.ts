type TCallback = (...args: any) => void;

type TListenersObject = {
  [event: string]: Array<TCallback>;
};

export default class EventBus {
  private listeners: TListenersObject;

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: TCallback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: TCallback) {
    if (!this.listeners[event]) {
        throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].filter((listener) => listener !== callback);
  }

  emit(event: string, ...args: unknown[]) {
    console.log(event);
    if (!this.listeners[event]) {
        throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach(callback => {
      callback(...args);
    });
  }
}
