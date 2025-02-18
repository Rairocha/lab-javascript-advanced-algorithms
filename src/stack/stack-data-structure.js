class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    return this.stackControl.length<this.MAX_SIZE
  }

  isEmpty() {
    return this.stackControl.length==0
  }

  push(item) {
    if(this.canPush()){
      this.stackControl.push(item)
      return this.stackControl
    }
    else{
      throw new Error('STACK_OVERFLOW');
    }
    // ... your code goes here
  }

  pop() {
    if(!this.isEmpty()){
      return this.stackControl.pop()
    }
    else{
      throw new Error('STACK_UNDERFLOW');
    }
    // ... your code goes here
  }

  display() {
    return this.stackControl
    // ... your code goes here
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
