# Kico Message

A simple and lovely Vue component for message popup.

Used by: [mx-space/admin](https://github.com/mx-space/admin)

Support: Vue 2

# Usage

```
yarn add kico-message
```

```tsx
import Message, { Message as M } from 'kico-message'
import Vue from 'vue'
Vue.use(Message)
Vue.prototype.$notice = M
```

Then, you can use `$notice` in Vue scope.

```tsx
// any.vue
this.$notice.success('Oh, this is a successful notification.')
```

# Interface & API

```ts
export declare enum MessageType {
    'success' = 0,
    'info' = 1,
    'error' = 2,
    'warning' = 3
}
export interface MessageConstructor {
    (message: string | string[], options?: MessageOptions): void;
}
export interface MessageOptions {
    timeout?: number;
    type?: keyof typeof MessageType;
    color?: string;
    closable?: boolean;
}
export interface Message {
    (message: string): void;
    (message: string, options: MessageOptions): void;
    success: MessageConstructor;
    error: MessageConstructor;
    info: MessageConstructor;
    warning: MessageConstructor;
}

```
