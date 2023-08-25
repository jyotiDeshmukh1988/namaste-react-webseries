## Namaste React Course by Akshay Saini
# Chapter 03 - Laying the Foundation

## Q: What is Component?
A. There are two types of components one is function and the other is class components.
=> Functional component
   - Like our normal javascript function, it always starts with Capital letter and return some JSX code or react element.
   - If you multiple statements then wrap it with parentheses ()
   - If you have single statement then you can skip return keyword
   - Calling one functional component inside another functional component called component composition


## Q: Is JSX HTML? 
A. No, JSX is JavaScript XML, an extension of JavaScript that allows writing HTML and Javascript together. 
HTML is a standard markup language for documents designed for the web browser.

## Q: Behind the scenes of JSX 
A. JSX convert to react.createElement code then return reactelement which is JS object and on rendering it converted to htmlElement. and all this things
are done by Babel called as package, transpiler,complier.

## Q: Babel and Parcel role in JSX
A. Babel is a package(compiler or transpiler) is useful to convert jsx code or modern highlevel js code to basic js code so it can easily understood by the browser. Browser cannot understand the JSX or highlevel js code so we need Babel for it. 
Parcel package takes the help of babel and transpile the JSX code to pure javascript code that browser can understands.

## Q: What is `JSX`?
A: JSX stands for JavaScript XML.
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.
JSX makes it easier to write and add HTML in React.
JSX converts HTML tags into react elements.
JSX also provides cross side script means preventing from malicious script execution

### Example 1 using JSX:
```
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```
### Example 2 Without JSX:
```
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```


## Q: Superpowers of `JSX`.
A: Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.
### Example
```
function greeting(user) {
//JSX
  return <h1>{user}, How are you!!!</h1>;
}
```


## Q: Role of `type` attribute in script tag? What options can I use there?
A: The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script>` and `</script>` tags. It has a Default value which is “text/javascript”.
### `type` attribute can be of the following types:
- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.
    ### Syntax
    ```
    <script type="text/javascript"></script>
    ```
- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and required babel to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.

## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
A: The Difference is stated below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable. 
The `{}` can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value or react element. In simple terms `TitleComponent` a function that is returning a JSX value.
A component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
### Example
```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
