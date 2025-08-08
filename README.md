# CV-builder 📄

## Project Overview
This project is a web-based **CV builder** application developed as part of **The Odin Project's React Section**. The primary goal was to gain a practical understanding of fundamental React concepts, specifically **props** and **state**, through building a functional application.

---

## Key Learnings & Concepts 
Developing this CV builder provided significant insights into core React concepts. Here are some of the key lessons learned during its creation:

### 1. From HTML Containers to React Components
* **HTML Containers:** Traditionally, HTML containers group related markup and content.
* **React Components:** In React, these containers evolve into **components**. Components not only encapsulate markup but also contain **logic**, making them **reusable** and **customizable** building blocks for your application. This modular approach significantly improves code organization and maintainability.

### 2. Handling Input Fields (Controlled Components)
* To efficiently **access and manage input field values** in React, it's crucial to use **controlled components**. This means the form data is handled by the React state. 
* **Avoid Direct DOM Manipulation:** Manually accessing DOM nodes to retrieve input values is generally discouraged in React as it goes against the declarative nature of the library and can lead to unpredictable behavior.
* **Dynamic Input Property Names:** Use **bracket notation (`[]`)** to dynamically add input property names, which is particularly useful when handling forms with varying input fields or when mapping over data.

### 3. Understanding Conditional Rendering & Component Lifecycle
Conditional rendering allows you to show or hide components based on certain conditions. However, it's vital to understand its implications on the component lifecycle:

* **Unmounting and Remounting:** When you conditionally render two or more *different* or *unrelated* components, React follows a specific process:
    1.  **Unmounts the Old Component:** The previously rendered component is completely removed from the DOM. This involves:
        * Running its cleanup functions.
        * Destroying its `useState` values (its internal state is lost).
        * Removing all associated DOM nodes from the DOM tree.
    2.  **Mounts the New Component:** The new component is then rendered from scratch. This involves:
        * Running its `useState` initializers (its state is re-initialized).
        * Rendering fresh DOM elements.
* **Consequences of Unmounting:**
    * **State Loss:** All state within the unmounted component is lost.
    * **DOM Removal:** Any DOM elements related to that component are removed.
    * **Effect Cleanup:** Any effects tied to the component are cleaned up.
* **"Throwing Away" vs. "Hiding":** It's crucial to understand that conditional rendering, in this context, is **not like "hiding" a component** (e.g., with `display: none` CSS). Instead, it's akin to "throwing it away" and then building a new one from scratch if it's rendered again.

#### Stage Analogy for Conditional Rendering:
Imagine your `index.html` file as a **physical stage** 🎭 that is never replaced in a Single Page Application (SPA). React components are like **actors (performers)** who come and go from this stage.

* **`index.html` = The Physical Stage Itself:** This is the unchanging foundation.
* **React Components = The Actors:** They are the dynamic elements of your application.
* **Conditional Rendering = The Casting Director:** This "director" decides which actors are on stage at any given moment.
    * When an actor leaves the stage (component unmounts) → They don't just hide behind the curtain; **they pack up their props, take their costumes, and leave the building.** (This signifies the loss of component state and DOM elements).
    * When they come back later (component remounts) → It's a **fresh appearance**; they have to set up their props and costumes again. (Their state is re-initialized).
* **Preserving State (Advanced):** If you want an "actor" to stay backstage with their "props" ready so they don't lose anything when called back, you'd either:
    * Keep them mounted but hide them (e.g., using `display: none` CSS, which doesn't unmount the component).
    * **Move their state up to a parent component (lifting state up)** so that the state survives even if the child component is unmounted and re-mounted. This is often the preferred approach for managing shared or persistent state.

