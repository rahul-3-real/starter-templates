# Project Guidelines

## HTML File Structure

When adding links and scripts to an HTML file, follow this sequence:

### **CSS**

1. CDN
2. Downloaded Libraries
3. External CSS File
4. Internal CSS
5. Custom CSS (optional)

### **JavaScript**

1. CDN
2. Downloaded Libraries
3. External JS
4. Custom JS & Function Calls

### **Best Practices**

- Before creating a component, add a proper comment and assign a suitable class name.
- Avoid duplicate `id` usage.

---

## CSS File Structure

### **variables.css**

- Contains reset styles, variables, imports, and reusable styles.

### **style.css**

- Imports `variables.css` at the top.
- Before writing styles for any section, include a proper comment for clarity.

---

## JavaScript File Structure

- All JavaScript code should be added to `app.js`.
- Write functions inside `app.js` and call them only on the pages where they are needed.
- **No direct execution** of functions to prevent potential errors.

---

## File System & Imports

### **File Linking**

- Always use `./link` when linking files, as it searches from the current directory.
- Avoid `/link` or `link` without `./`, as they may not resolve correctly.

### **File Naming Conventions**

- Use proper naming conventions for better readability and to avoid errors:
  - ✅ **Recommended:** `custom-file.css`, `customFile.js`
  - ❌ **Avoid:** `custom file.css`, `Custom File.js`, `customfile.js`
- File names should be consistent and readable.

### **Code Reusability**

- Reuse styles and functions whenever needed to avoid redundant code.
- Apply the same principle to HTML sections by structuring reusable components efficiently.

---

### Follow these guidelines to maintain a clean and organized project structure.

### Reference Code for better understanding

- [Reference Code](https://github.com/rahul-3-real/uptown-realm)
- [Reference Code](https://github.com/rahul-3-real/hermanos-interview-project)
