// Example

export default function(){
    console.log(`Default Function`)
}

export function demo5(){
    return `Welcome back`
}

let alert = "Advance ES6 Feature Modules";

function demo(title) {
    console.log(`Welcome Back to the ${title}`)
}

 
function demo1(title) {
    return `Welcome Back to the ${title}`
}


class testing {
    constructor() {
        console.log("Constructor Method");
    }
}

export { alert, demo, demo1, testing };