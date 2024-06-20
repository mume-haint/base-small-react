### Library: React 20
### Language: TypeScript
### Build tool: Vite
###

### CSS styling: Tailwind
### Code checking: Eslint
### Library UI: Material UI
### Mock API: Beeceptor

# Setup environment
#### - config .env
  ```typescript
  VITE_API_URL= 12
  ```
#### install package
  ```sh
  npm install
  ```
#### run in local
  ```sh
  npm run dev
  ```
#### build for production: 
  ```sh
  npm run build
  ```
#### preview build project: 
  ```sh
  npm run preview
  ```


# Project structure:
### public: public data(image, icon, font,...)
### src: logic code
## Basic:
### _mock: Contains mock data for testing purposes.

### api: functions to call API
- base.ts: Initializes configuration for Axios.

### components: shared component to use among pages
- helmet: Configures metadata for pages in the project.
- hook-form: Reusable component for react-hook-form.
- NotistackProvider, ReduxProvider: provider wrapper to using component globally

### layouts: Configures the page layout: header, navbar, and content areas.

### page-section: Contains component parts of a page

### page: Contains pages of project

### route: Manages routing for the application.

### styles: Contains CSS files for the project.

### types: typescript types, interfaces

### utils: manage global functions using in project

## Advanced 

### context: Manages state through nested components without the need to pass props down manually.

### redux: Manages global state using Redux.

### guards: Contains protected logic to handle unauthorized users.

### hooks: Custom hooks to use features in any component.

### theme: override MUI default style

## Additional

### tailwind.config.js
### tsconfig.json
### vite.config.ts
### vercel.json

## Todo: 
### If have backend api
- api/auth.ts: using axios request to backend server instead of mock data

- utils/jwt.ts: 
  - inValidToken() function: using jwt-decode library to handle valid token
  - Add function to handle token expired and refresh token

