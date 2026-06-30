# SnapURL-ExpressJs
SnapURL is a clean, fun, and fast URL shortening web application built to master backend fundamentals. Developed as a hands-on project to learn the Model-View-Controller (MVC) architecture, it bridges the gap between client requests, data persistence, and UI rendering.

The application features a sleek, dark-themed glassmorphism interface where users can instantly transform long, unwieldy links into clean, microscopic URLs.

Technical Stack & Tools
Backend Framework: Express.js (Node.js runtime)

Database: MongoDB with Mongoose ODM

Templating Engine: EJS (Embedded JavaScript)

ID Generation: nanoid (for secure, collision-resistant string IDs)

Development Utility: nodemon (for hot-reloading)

Architectural Patterns Learned
This project marks my first deep dive into the MVC (Model-View-Controller) pattern, helping decouple the application logic into three distinct layers:

Models: Built using Mongoose schemas to define the blueprint for storing original URLs, generated short codes, and tracking basic click metrics.

Views: Rendered dynamically using EJS templates, implementing a polished, minimalist deep-purple design.

Controllers/Routes: Handles the incoming requests, invokes the business logic (validating URLs and generating IDs), updates the database, and serves the corresponding views or handles redirection.

Key Features - 

Instant Shortening: Generates unique, compact alphanumeric short codes using nanoid.

Dynamic Redirection: Seamlessly intercepts short URL requests and routes users to the original target destination.

Clean UI: A modern interface complete with smooth gradients and focused input fields.
