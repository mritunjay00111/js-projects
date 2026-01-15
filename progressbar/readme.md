# Progress Bar with Steps (Vanilla JavaScript)

A simple interactive **multi-step progress bar** built using **HTML, CSS, and Vanilla JavaScript**.  
Users can move forward and backward through steps using **Next** and **Prev** buttons, with smooth visual updates.
---
## 🚀 Features
- Multi-step progress indicator
- Next / Previous navigation
- Active and completed step highlighting
- Smooth CSS transitions
- Fully responsive layout
- No external libraries (pure JS)
---
## 🛠️ Built With
- HTML5
- CSS3 (Flexbox & transitions)
- JavaScript (DOM manipulation)
---
## 📸 How It Works
- Steps are represented by circles
- Lines between steps fill as progress increases
- Clicking **Next** moves forward
- Clicking **Prev** moves backward
- Buttons disable automatically at first and last step
---
## 📂 Project Structure
progress-bar/
├── index.html
├── style.css
└── script.js


## 🧠 JavaScript Logic (Overview)

- `currentStep` tracks the active step
- Each step and connector is styled using the `complete` class
- Progress is updated dynamically based on step index
- Buttons are enabled/disabled based on position

---

📌 Future Improvements
Add animations on step change

Make number of steps dynamic

Add labels for each step

Mobile touch support

✨ Learning Outcome
This project helped practice:

DOM selection and events

Conditional rendering with JavaScript

CSS pseudo-classes and transitions

State management in UI components

