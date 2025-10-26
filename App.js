{
  /* <div>
  <div id = "child1">
    <h1 id="heading"> hello world from nested element</h1>
    <h2>i'm sibling of h1 </h2>
  </div>
  <div id = "child2">
    <h1 id="heading"> hello world from nested element</h1>
    <h2>i'm sibling of h1 </h2>
  </div>
</div> */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement(
      "h1",
      { id: "heading" },
      "hello world from nested element"
    ),
    React.createElement("h2", {}, "i'm sibling of h1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement(
      "h1",
      { id: "heading" },
      "hello world from nested element"
    ),
    React.createElement("h2", {}, "i'm sibling of h1"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hellow world from react !!!"
// );
root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// reactElement is basically a javaScript object  which when rendered using (.render()) method converts this object into HTML which our browser understands.
