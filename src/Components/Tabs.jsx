import React, { useState } from "react";
import "./Tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Javascript", content: "JavaScript is a versatile, high-level programming language widely used for web development to create interactive and dynamic user interfaces. It enables developers to manipulate the Document Object Model (DOM), handle events, and perform asynchronous operations using features like Promises, async/await, and callbacks. JavaScript supports functional and object-oriented programming paradigms, making it adaptable for diverse applications. Core topics include variables, functions, loops, arrays, objects, and classes. Advanced concepts like closures, prototypes, and modules enhance its flexibility. JavaScript powers front-end frameworks like React, Angular, and Vue and, with Node.js, serves backend development, making it integral to full-stack development." },
    { label: "Tailwindcss", content: "Tailwind CSS is a utility-first CSS framework that simplifies web development by providing pre-designed classes directly in HTML. It enables rapid styling without writing custom CSS, promoting consistency and reducing development time. Tailwind's utility classes cover layout, typography, spacing, colors, and responsiveness, allowing developers to create complex designs efficiently. Its configuration file offers extensive customization for theme colors, breakpoints, and plugins, enabling tailored designs. Tailwind is highly responsive, supporting mobile-first workflows with intuitive media query utilities. Popular in modern development, it integrates seamlessly with frameworks like React and Vue, making it a go-to choice for creating responsive and visually appealing UIs." },
    { label: "Reactjs", content: "ReactJS is a powerful JavaScript library used for building user interfaces, especially single-page applications. Developed by Facebook, it enables developers to create reusable UI components that manage their own state, improving code efficiency and maintainability. Core concepts include JSX (a syntax extension for writing HTML within JavaScript), the virtual DOM (for fast updates and rendering), and hooks like useState and useEffect for state and lifecycle management. React’s component-based architecture promotes modular development, while libraries like React Router and state management tools like Redux enhance functionality. Its widespread adoption and strong community make ReactJS an essential tool in modern web development." },
    { label: "MaterialUI", content: "Material-UI (MUI) is a popular React UI framework that provides a collection of ready-to-use, customizable components for building modern, responsive web applications. It follows Google’s Material Design principles, offering a clean and consistent design language. MUI includes components like buttons, dialogs, forms, tables, and navigation menus, simplifying the development process. It supports theming, allowing developers to customize colors, typography, and layout to align with branding. With built-in responsiveness and accessibility features, MUI ensures applications are user-friendly and mobile-compatible. Its extensive documentation, active community, and seamless integration with React make it an excellent choice for developers seeking efficient, scalable UI solutions." },
  ];

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        <p>{tabs[activeTab].content}</p>
      </div>
    </div>
  );
};

export default Tabs;
