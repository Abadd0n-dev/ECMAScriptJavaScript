// task1

arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// task2

function createCounter() {
    const obj = {
        increment: (number) => ++number,
        decrement: (number) => --number       
    }
    return obj;  
}
const newObj = createCounter();
console.log(newObj.increment(8));
console.log(newObj.decrement(8));


// task3

function findElementByClass(rootElement, nameOfClass) {
    for (let i = 0; i < rootElement.children.length; i++) {      
        if(rootElement.children[i].classList.contains(nameOfClass)) {
            return rootElement.children[i];
        } else {
            findElementByClass(rootElement.children[i]);
        }  
    }
    
}
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'top-content__content');
console.log(targetElement);