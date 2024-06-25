# 1. Technologies used

- Library: React 20
- Language: TypeScript
- Build tool: Vite

- CSS styling: Tailwind
- Code checking: Eslint
- Library UI: Material UI
- Mock API: Beeceptor

# 2. Setup environment
- Step 1: config .env file
  ```typescript
  VITE_API_URL=http://foo.com
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
  
# 3. Main feature
- **API:** using [axios](https://axios-http.com/docs/intro) + handle jwt token with [jwt-decode](https://www.npmjs.com/package/jwt-decode)
- **Form control & validation:** using [react-hook-form](https://react-hook-form.com/get-started) & [Yup](https://github.com/jquense/yup/tree/master)
- **Manage global state**: using context & redux/[redux-toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- **Notification:** using [notistack](https://notistack.com/getting-started) + MUI
- **Handle metadata:** using [react-helmet-async](https://www.npmjs.com/package/react-helmet-async)


# 3. Project structure
```bash
root
├─ public
   ├─ assets
      ├─ icons
         ├─ ...
      ├─ images
      ├─ fonts
      ├─ ...
├─ src
   ├─ _mock
      ├─ ...
   ├─ api
      ├─ base.ts
      ├─ ...
   ├─ components
      ├─ helmet
      ├─ hook-form
      ├─ provider
      ├─ ...
   ├─ context
   ├─ guards
   ├─ hooks
   ├─ layouts
   ├─ page-section
   ├─ pages
   ├─ redux
   ├─ routes
   ├─ style
      ├─ global.css
      ├─ ...
   ├─ theme
   ├─ types
   ├─ utils
   ├─ main.tsx
```

## 3.1. public: public data in browser (image, icon, font,...)
## 3.2. src: contain logic code
### 3.2.1. Basic
- **_mock:** Contains mock data for testing purposes.

- **api:** functions to call API
  - **base.ts:** Initializes configuration for Axios.

- **components:** shared component to use among pages
  - **helmet**: Configures metadata for pages in the project.
  - **hook-form**: Reusable component for react-hook-form.
  - **provider:** provider wrapper to using component globally
  - ...

- **layouts:** Configures the page layout: header, navbar, and content areas.
- **page-section:** Contains component parts of a page
- **page:** Contains pages of project
- **route:** Manages routing for the application.
- **styles:** Contains CSS files for the project.
- **types:** typescript types, interfaces
- **utils:** manage global functions using in project

### 3.2.2. Advanced 

- **context:** Manages state through nested components without the need to pass props down manually.
- **redux:** Manages global state using Redux.
- **guards:** Contains protected logic to handle unauthorized users.
- **hooks:** Custom hooks to use features in any component.
- **theme:** override MUI default style

### 3.2.3. Additional

- tailwind.config.js
- tsconfig.json
- vite.config.ts
- vercel.json
-

# 5. Todo
## 5.1. If have backend api
Step 1:
**api/auth.ts**: 
- using axios request to backend server instead of mock data

Step 2: **utils/jwt.ts**: 
- inValidToken() function: using jwt-decode library to handle valid token
- Add function to handle token expired and refresh token

