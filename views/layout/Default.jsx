const React = require("react");

//everything that is wrapped in default layout will have the structure that is in the default.jsx
function DefaultLayout(props) {
  const { title, children } = props;
  return (
    <html>
      <head>
        <title>{title}</title>
      </head>
      <nav>
        <a href="/">Home</a>
      </nav>

      <body>
        <h1>{title}</h1>

        {children}
      </body>
    </html>
  );
}

module.exports = DefaultLayout;
