# 1. Technologies used
## 1.1. Core
Library: React 20<br/>
Language: TypeScript<br/>
Build tool: Vite<br/>
## 1.2. Other
CSS styling: Tailwind<br/>
Code checking: Eslint<br/>
Library UI: Material UI<br/>
Mock API: Beeceptor<br/>

# 2. Setup environment
- Step 1: config .env file
  ```typescript
  VITE_API_URL=12
  ```
- Step 2: install package
  ```sh
  npm install
  ```
  
If run locally
- Step 3a: run in local
  ```sh
  npm run dev
  ```
  
If build to run in production
- Step 3b.1: build for production: 
  ```sh
  npm run build
  ```
- Step 3b.2: preview build project: 
  ```sh
  npm run preview
  ```


# 3. Project structure

## 3.1. public: public data(image, icon, font,...)
## 3.2. src: logic code
### 3.2.1. Basic
**_mock:** Contains mock data for testing purposes.

**api:** functions to call API
- **base.ts:** Initializes configuration for Axios.

**components:** shared component to use among pages
- **helmet**: Configures metadata for pages in the project.
- **hook-form**: Reusable component for react-hook-form.
- **provider:** provider wrapper to using component globally
- ...

**layouts:** Configures the page layout: header, navbar, and content areas.<br/>
**page-section:** Contains component parts of a page<br/>
**page:** Contains pages of project<br/>
**route:** Manages routing for the application.<br/>
**styles:** Contains CSS files for the project.<br/>
**types:** typescript types, interfaces<br/>
**utils:** manage global functions using in project<br/>

### 3.2.2. Advanced 

**context:** Manages state through nested components without the need to pass props down manually.<br/>
**redux:** Manages global state using Redux.<br/>
**guards:** Contains protected logic to handle unauthorized users.<br/>
**hooks:** Custom hooks to use features in any component.<br/>
**theme:** override MUI default style

### 3.2.3. Additional

tailwind.config.js<br/>
tsconfig.json<br/>
vite.config.ts<br/>
vercel.json<br/>

# 4. Todo
## 4.1. If have backend api
Step 1:
**api/auth.ts**: 
- using axios request to backend server instead of mock data

Step 2: **utils/jwt.ts**: 
- inValidToken() function: using jwt-decode library to handle valid token
- Add function to handle token expired and refresh token

