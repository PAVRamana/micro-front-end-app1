import { jsx, Fragment } from 'react/jsx-runtime';

function CustomComponent() {
    return (jsx(Fragment, { children: jsx("div", Object.assign({ id: "container" }, { children: jsx("div", Object.assign({ id: "content" }, { children: "Innter Application" })) })) }));
}

export { CustomComponent as default };
//# sourceMappingURL=index.js.map
