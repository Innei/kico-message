"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_1 = tslib_1.__importDefault(require("vue"));
const message_vue_1 = tslib_1.__importDefault(require("./message.vue"));
const MessageConstructor = vue_1.default.extend(message_vue_1.default);
var MessageType;
(function (MessageType) {
    MessageType[MessageType["success"] = 0] = "success";
    MessageType[MessageType["info"] = 1] = "info";
    MessageType[MessageType["error"] = 2] = "error";
    MessageType[MessageType["warning"] = 3] = "warning";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
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
    listDom === null || listDom === void 0 ? void 0 : listDom.appendChild(dom.$el);
};
exports.Message = ((message, options = {}) => {
    // const { type, timeout } = options
    createMessage(message, options);
});
['success', 'info', 'error', 'warning'].forEach((type) => {
    ;
    exports.Message[type] = (message, options) => {
        if (Array.isArray(message)) {
            message.forEach((message, index) => {
                setTimeout(() => {
                    createMessage(message, Object.assign(Object.assign({}, options), { type }));
                }, index * 100);
            });
        }
        else {
            createMessage(message, Object.assign(Object.assign({}, options), { type }));
        }
    };
});
exports.default = {
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
        Vue.prototype.$message = exports.Message;
    },
    Message: exports.Message,
};
//# sourceMappingURL=index.js.map