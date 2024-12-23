# AngularPhonebook

This is an Phone book application built using Angular. Below are the features the app has:

### Home page list view

<img width="2054" alt="homepage-list" src="https://github.com/user-attachments/assets/64983e7a-2ab4-46bc-be8d-93e2ccc8462a" />

### Home page grid view

<img width="2045" alt="homepage-grid" src="https://github.com/user-attachments/assets/43e99210-8723-4079-831f-f710deb818b0" />

### Add contact view

<img width="2052" alt="add-contact" src="https://github.com/user-attachments/assets/2d6998bf-3828-49d3-9651-703d1e6ef1ed" />

### View and update contact view

<img width="2049" alt="view-and-update-contact" src="https://github.com/user-attachments/assets/be9f828e-75e4-46a7-a06e-65d0fce62911" />

## Setting up the project locally.

Run `ng serve` then navigate to `http://localhost:4200/` on your browser.

## Features

- **List contacts** : A list of contacts displayed either in list or grid mode.
- **View and update contact** : On clicking on the contact, you can view or update the contact. The update button is disabled until a change is made on the form.
- **Search contacts** : Live searching with a debounce of 300 milliseconds to allow searching to happen when a user stops typing.
- **Delete a contact** : Each contact has a delete button that can be used to delete the contact. For the confirmation dialog I am using the browsers default confirm functionality.
- **Bulk deletion** : A checkbox beside the contacts can be used to select multiple upon which a delete button is available to delete multiple.
- **Home page toggle** : Toggle to switch between the grid view and list view.

### Features partially done.

- **Dark and light mode** : The app supports light and dark mode, but it doesnt have an in app toggle. It does it based on the device preferences.

## Technical details

The phone books app is divided into 3 modules/sections:

- **Features** : Feature modules e.g contacts where the phonebook app is.
- **Core** : This holds essential files for the entire app.
- **Shared** : Shared code for the whole app.

### Contacts Module

It is the primary module for the phonebook feature. The module is lazy loaded and accessible by the `/contacts` route. It has its own child routes in the contact-routing.module.ts.
Each of its routes is lazy loaded within the module apart from the primary path.

### Styling

We are using TailwindCSS within templates and SCSS to create shared styles from tailwind's styles.

### Things to note.

- **Storage** : I am using an in memory data store that tries to simulate how responses from a backend would be sent. This is in the file `temp/data.service.ts`.
- **State management** : I am using a centralized state in the form of a behavior subject in the contact.service.ts.
- **Phone number validation** : It currently supports only kenyan phone numbers. This is hardcoded in the app.
- **Architecture** : We are using a combination of Standalone Components and Modules. Modules are used to group features and provide routing for each feature. I also lazy loads modules as needed.
- **Lazy loading & Preloading** - The app lazy loads most routes. I am using the inbuilt PreloadAllModules strategy to preload routes after the initial page load due to the app being small enough.

## Improvements

- **Add tests** : Tests were ommitted to prioritize core functionality implementation. They should be added for better app stability.
- **Better phone number validation** : Currently only Kenyan phone numbers are supported. Add a dropdown for selecting location/country code.
- **CI/CD** : Add CI in repo and before commits for early testing, and automatic deployments on merge to main.
- **Backend** : Provide a more robust backend with status codes for requests and data persistence.
- **Confirmation modal** : Build a better confirmation popup instead of relying on the browsers confirmation functionality for a consistent looking application.
