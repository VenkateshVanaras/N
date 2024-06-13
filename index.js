const Button = (props) => {
  //  Write your code here.
  const { cls, content } = props;
  return <button className={cls}> {content}</button>;
};

const element = (
  //  Write your code here.
  <div className="main-card">
    <h1 className="main-heading">Social Buttons</h1>
    <div className="buttons-card">
      <Button cls="first" content="Like" />
      <Button cls="second" content="Comment" />
      <Button cls="third" content="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
