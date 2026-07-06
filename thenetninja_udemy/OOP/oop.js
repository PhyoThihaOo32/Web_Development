const names = ["phyo", "bob"];
const ages = new Array(23, 25, 56); // Array() is constructor that create Array Object of ages

const userOne = {};
const userTwo = new Object();

// primitive type are not objects like string numbers boolean null undefined
// they don't have any method or properties
const city = "Yangon";
city.length();
city.toUpperCase();

// but we can use properties like length() on string - why?
// when we try to use properties or method - javascript take that primitive value
// and wrap it inside the Wrapper object - that object have the properties and methods
// do all this under hook

const places = new String("somewhere");
// String() is the constructor and this create a new String wrapper object
// that is wrapping the primitive value which is string in a String object - now the object has diff prop and methods that we can use
