import Vue from 'vue';
import Main from './message.vue';
const MessageConstructor = Vue.extend(Main);
export var MessageType;
(function (MessageType) {
    MessageType[MessageType["success"] = 0] = "success";
    MessageType[MessageType["info"] = 1] = "info";
    MessageType[MessageType["error"] = 2] = "error";
    MessageType[MessageType["warning"] = 3] = "warning";
})(MessageType || (MessageType = {}));
const createMessage = (message, options) => {
    if (!message) {
        throw new Error('message is empty.');
    }
    const { type = 'info', color = '', closable = false, timeout = 3000, } = options;
    const vNode = new MessageConstructor({
        data: { message: message, type, timeout, color, closable },
    });
    const dom = vNode.$mount();
    const listDom = document.getElementById('notice-list');
    listDom?.appendChild(dom.$el);
};
export const Message = ((message, options = {}) => {
    // const { type, timeout } = options
    createMessage(message, options);
});
['success', 'info', 'error', 'warning'].forEach((type) => {
    ;
    Message[type] = (message, options) => {
        if (Array.isArray(message)) {
            message.forEach((message, index) => {
                setTimeout(() => {
                    createMessage(message, { ...options, type });
                }, index * 100);
            });
        }
        else {
            createMessage(message, { ...options, type });
        }
    };
});
export default {
    install(Vue, options = {}) {
        const messageListNode = document.createElement('div');
        messageListNode.setAttribute('id', 'notice-list');
        document.body.appendChild(messageListNode);
        messageListNode.style.cssText = `top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    padding: 1em;
    position: fixed;
    user-select: none;
    pointer-events: none;`;
        Vue.prototype.$message = Message;
    },
    Message,
};
//# sourceMappingURL=index.js.map