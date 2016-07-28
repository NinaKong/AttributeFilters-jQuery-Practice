# AttributeFilters-jQuery-Practice
Practice for jQuery Attribute Filters

# Attribute Filters Practice Including

- A h1 tags contain 'Title' 
- ID that have at least one child element
- A div that has a tags that have a id attribute
- Use the nth-child filter to select an nth-child index of a given type


#Examples

- $("h1:contains('Title')").css({"padding": "2em", "color": "#b37aa5"}); 

- $("#Content:parent").css("font-size", "2.5em");

- $("div:has(a[id=icon3])").css("padding", "2em 1em");

- $("div a:first-child").css("color", "#b26c34"); 

- $("div a:last-of-type").css("color", "#eba96d"); 

- $("div a:nth-child(2)").css("color", "#b37aa5"); 

- $("div a:nth-child(3n)").css("color", "#e4b7bf"); 
