import App from "./app";

// INIT
App.listen(App.get("port"), () => {
  console.log("Server Open In Port " + App.get("port"));
});
