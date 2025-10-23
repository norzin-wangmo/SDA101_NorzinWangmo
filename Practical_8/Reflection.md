# Reflection — Practical 8: Form Validation Exercise

## Objective
Build a responsive form and implement client-side validation to practise capturing user input, validating fields, and providing clear user feedback.

## What I implemented
- `Excercise_1/index.html` — A form with fields for name, email, password, and confirmation.
- `Excercise_1/validation.js` — Client-side validation handling required fields, email format, password rules, and matching confirmation. Shows inline error/success messages.

## Key learnings
- Practised event handling (`submit`, `input`) and preventing default form submission for validation.
- Learned how to validate common input patterns (regex for emails, length checks for passwords) and display helpful inline feedback.
- Improved debugging skills using browser DevTools and console logging.

## Challenges
- Ensuring validation logic is robust and does not produce conflicting messages when multiple events fire.
- Balancing immediate inline validation with not overwhelming the user (debouncing or validating on blur can help).

## Improvements / Next steps
- Refactor validation logic into modular functions to enable unit testing.
- Add ARIA attributes (`aria-describedby`) and ensure error messages are announced for accessibility.
- Implement realtime validation with debouncing to reduce noise while typing.
- Add server-side validation when wiring the form to a backend (client-side checks are for UX only).

## Time spent
~1.5–2 hours implementing and testing validation behaviors.

## Conclusion
This exercise reinforced practical skills for client-side form validation and accessible feedback patterns. Future work will focus on refactoring for testability and enhancing accessibility.