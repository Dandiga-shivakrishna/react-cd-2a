const Button = (props) => {
  const { name, className } = props;
  return <button className={`button ${className}`}>{name}</button>;
};

const element = (
  <div className="bg-container">
    <div className="content-center">
      <h1 className="heading">Social Media Button</h1>
      <div>
        <Button name="Like" className="button-like" />
        <Button name="Comment" className="button-comment" />
        <Button name="Share" className="button-share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
