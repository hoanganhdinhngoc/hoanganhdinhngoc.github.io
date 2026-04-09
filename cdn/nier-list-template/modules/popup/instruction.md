# Nier Popup Module - User Guide

## 1. Introduction
The **Nier Popup Module** is a lightweight tool designed to bring the iconic *Nier: Automata* user interface style to any of your web projects. 

This module follows a **"Plug & Play"** philosophy. You don't need to manually write complex HTML on every page. Simply link the central files from your GitHub, and you can trigger a high-quality popup with just one line of code.

---



## 2. Key Features
The module is highly flexible and supports three main types of interactions:

1.  **Basic Alert:** A simple notification with an "OK" button. Best for errors or status updates.
2.  **Confirmation (Yes/No):** A dialog with multiple buttons to handle user decisions (e.g., "Are you sure you want to delete?").
3.  **Dynamic Forms:** Embed HTML elements like `input` or `textarea` directly inside the popup to collect user data without leaving the current view.

---



## 3. Initial Setup (How to install on a new page)

To add the Nier Popup functionality to any new HTML file, follow these two simple steps:

### Step 1: Include jQuery (Required)
This module requires **jQuery** to function. If your page doesn't have it yet, paste this line inside your `<head>` tag:

```html
<script src="[https://code.jquery.com/jquery-3.7.1.min.js](https://code.jquery.com/jquery-3.7.1.min.js)"></script>
```

### Step 2: Link the Nier Popup Module
Paste these two lines inside your `<head>` tag (Make sure they are placed BELOW the jQuery link from Step 1):

```html
<link rel="stylesheet" href="[https://hoanganhdinhngoc.github.io/cdn/nier-list-template/module/popup/nier-popup.css](https://hoanganhdinhngoc.github.io/cdn/nier-list-template/module/popup/nier-popup.css)">
<script src="[https://hoanganhdinhngoc.github.io/cdn/nier-list-template/module/popup/nier-popup.js](https://hoanganhdinhngoc.github.io/cdn/nier-list-template/module/popup/nier-popup.js)"></script>
```

**🎉 Setup complete!** You can now trigger popups anywhere in your scripts.



## 4. Usage Guide & Code Examples
The primary function to trigger a popup is: `showPopup(Title, ContentHTML, ButtonsArray).`

### Type 1: Basic Alert Popup
Ideal for simple messages. The system automatically creates an "OK" button for you.

**Copy & Paste Code:**

```js
// Trigger a simple alert
showPopup("SYSTEM ALERT", "<p>Your message goes here. The operation was successful.</p>");
```

### Type 2: Confirmation Popup (Yes/No)
Use this when you need the user to choose between different actions.

**Copy & Paste Code:**

```js
showPopup(
    "CONFIRM ACTION", 
    "<p>Are you sure you want to proceed? This action cannot be undone.</p>", 
    [
        // First Button: Confirm
        {
            text: "YES, PROCEED", 
            id: "btnConfirmYes", 
            action: function() {
                // INSERT YOUR LOGIC HERE (e.g., delete data)
                console.log("Confirmed!");
                
                closePopup(); // Always call this to close the dialog
            }
        },
        // Second Button: Cancel
        {
            text: "CANCEL",
            action: function() {
                closePopup(); // Just close the popup
            }
        }
    ]
);
```

### Type 3: Input Form Popup
This allows you to collect data from the user directly within the popup.

**Copy & Paste Code:**

```js
// 1. Define your form HTML
let myForm = `
    <p style="text-align:left;">Please enter your details:</p>
    
    <label><b>Username:</b></label>
    <input type="text" id="userInputName" class="popup-input" placeholder="Enter name...">
    
    <label><b>Comment:</b></label>
    <textarea id="userInputNote" class="popup-textarea" placeholder="Enter notes..."></textarea>
`;

// 2. Trigger the popup with the form
showPopup(
    "USER INPUT REQUIRED", 
    myForm, 
    [
        {
            text: "SAVE INFORMATION",
            action: function() {
                // Retrieve data using jQuery
                let name = $('#userInputName').val();
                let note = $('#userInputNote').val();
                
                if(!name) {
                    showPopup("ERROR", "Name field cannot be empty!");
                    return; // Keep the form open
                }
                
                console.log("Input received: " + name + " - " + note);
                closePopup(); 
            }
        },
        {
            text: "DISCARD",
            action: function() { closePopup(); }
        }
    ]
);
```