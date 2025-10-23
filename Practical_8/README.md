# Practical 8 – Form Validation Exercise

## Project overview
This folder contains Practical 8 for the SDA101 course: a small exercise focused on building a form and implementing client-side validation using vanilla JavaScript. The exercise demonstrates semantic form markup, input validation, and providing user feedback.

---

## Folder structure (inside `Practical_8`)
- `README.MD` — (this file)
- `Reflection.md` — Personal reflection for Practical 8.

Subfolder:
- `Excercise_1/`
  - `index.html` — Form example page. Contains the markup for inputs, labels and the form layout.
  - `validation.js` — JavaScript for client-side validation and displaying feedback messages.

---

## Objective
Create a responsive form with client-side validation to practise capturing user input, validating fields (required fields, email format, password rules, etc.), and showing inline error/success messages.

---

## How to view locally
1. Open `Excercise_1/index.html` in a browser (double-click the file) or use the Live Server extension in VS Code for live reload.
2. Fill the form fields and attempt to submit to see validation messages driven by `validation.js`.
3. Use the browser DevTools Console to view any console messages for debugging.

---

## Implementation notes
- Validation is handled in `Excercise_1/validation.js` via event listeners attached to the form submit event and/or input events.
- Common checks include required field presence, email regex validation, minimum password length, and matching password confirmation.
- Feedback is shown inline next to fields and/or as a summary message to improve usability.

---

## Suggestions / Next steps
- Improve accessibility by adding ARIA roles and associating error messages with inputs using `aria-describedby`.
- Add unit tests for validation functions or extract validation logic into reusable functions for easier testing.
- Enhance UX with realtime validation (on input) and clear success states.
- Sanitize and validate again on the server side when wiring the form to a backend — client-side validation is only for user experience.

---

## Technologies used
- HTML5 (forms, semantic inputs)
- CSS3 (layout and responsive styles)
- JavaScript (DOM, event handling, form validation)

---

