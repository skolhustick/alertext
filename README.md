# alertext

Alertext is a simple to use alert plugin written in Javascript. It has no dependencies but plays well with Jquery and Bootstrap. It is designed simply, adopts Bootstrap-esque color classes, and can be easily customized.

## Getting started - Basic

### Using HTML data attribute

Please include both alertext.js and alertext.css in your page before anything else.

```html
<!-- Add alertext as data-attribute with the message to the HTML element of choice. This will bind the click event. -->
<a alertext="Some primary information to notify">Some button</a><br>


<!-- Place this anywhere you load your scripts. -->
<script>
  alertext.init();
</script>
```

### Using JS

```html
<a alertext="Some primary information to notify">Some button</a><br>
```
## In it's full form

### HTML5 attribute
```html
<a 
alertext="Some primary information to notify"
alertext-type="danger"
alertext-options='{"color":"green","background":"orange"}'
alertext-delay='1000'>
Some button
</a>

<!-- Place this anywhere you load your scripts. -->
<script>
  alertext.init();
</script>
```
### Via JS

```html
<script>
  //alertext.alert(message, type, options(css), delay(before dissapear));
  alertext.alert("Launched programatically", "info", '{"color":"green","background":"orange"}', 10000);
</script>
```

### Skipping parameter

```html
<script>
  //You can skip parameters by just leaving them undefined. Below, is an example of type and delay skipped:
  alertext.alert("Launched programatically", undefined, '{"color":"green","background":"orange"}');
</script>
```

## Changing types

Alertext comes with the following types:
1. primary
2. success
3. warning
4. info
5. danger

Primary is the default class.

### Using HTML data attribute

```html
<!-- Using the danger type -->
<a alertext="Something dangerous"
alertext-type="danger">Danger</a><br>


<!-- Place this anywhere you load your scripts. -->
<script>
  alertext.init();
</script>
```

### Using JS

```html
<script>
  alertext.alert("Launched programatically", "danger");
</script>
```
