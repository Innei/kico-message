import { VueConstructor } from 'vue/types/umd';
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
export declare const Message: Message;
declare const _default: {
    install(Vue: VueConstructor<import("vue/types/umd")>, options?: {}): void;
    Message: Message;
};
export default _default;
