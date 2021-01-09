export function Input(props) {
  return (
    <>
      <input {...props} />
      <style jsx>{`
          input {
            padding: 24px 24px;
            border-radius: 4px;
            border: 1px solid #cfdae2;
            border-bottom: 2px solid #cfdae2;
            display: flex;
            font-size: 1em;
            outline: none;
            transition all 0.15s;
            margin-bottom: 24px;
          }
          input:focus {
            border-color: #90a6b6;
            box-shadow: 10px 10px 30px #d3d5d6, -5px -5px 15px #ffffff;
          }
      `}</style>
    </>
  );
}

export function Todo(props) {
  return (
    <>
      <p {...props} />
      <style jsx>{`
        .todo {
          padding: 12px;
          margin: 0;
          border-bottom: 1px dashed #cfdae2;
        }
        .todo:hover {
          background: #f8fafc;
          border-color: #50a2dd;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
