**Step One:**

Import the average temperature component and temperature controller component into App.jsx

**Step Two:**

Call the two components you imported, between the "Screen" <div>

**Step 3:**

Noving to the Average Temp Component, you will need to import the data.js file.

With all the imports complete, you'll now need to think about which parameters are needed.

1. Looking at the Average Temperature Card, it recieves all it's data from the data.js file and needs two parameters.
2. The TempCard component looks like it does. It handles showing the current temperature as well adjusting that value with two buttons.

**Step 4**

Add the props parameter to the TempCard component so that we can access props that we add.

1. Add the provided IncreaseTemperature, DecreaseTemperature functions as well as the Temperature value as props.

**Step 5**

Finally, we need to hook up the click functionality.

We should call on the onClick prop of the <button> and send it the correct function using the props.OBJECT (e.g. props.temperature) method.

**Extra Credit**

There is a provided background color value that gets adjusted each time you increase or decrease the temperature value. For extra credit you could add a style prop to the <div> with the class of screen, and using a template literal, break apart the bgCol array to set the background color of the screen using the rgb format (e.g. rgb(122, 122, 122))
