state
=====

## svg.html

http://stackoverflow.com/questions/17409841/d3-integration-with-angular-error-invalid-value-for-rect-attribute-x

> SVG elements use an XML-based schema, and are namespaced, and as such have validation rules. 
> Certain attributes can't take an Angular interpolated directive because they expect a numeric value, 
> and the browser validates this before Angular ever has a chance to catch it (even if the element 
> is created and not appended to the DOM yet).
    
> ...when you want to do Angular interpolation on attributes of SVG elements, prepend the attribute name with ng-attr-.
