const Tag = (props) => {
    return (
      <div className="mx-2 px-8 text-xl py-1 bg-blue-300 rounded-md text-white font-semibold inline-block text-center">
        {props.text}
      </div>
    );
  };
  
  export default Tag;