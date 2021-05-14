import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";

export default function Tests() {
  const [testReload, setTestReload] = useState(true);
  console.log('testReload', testReload);
  return (
    <div>
      <h1 className="text-center bg-danger text-white">Test</h1>
      {ReactHtmlParser(
        `<hr id='foo' class='bar' data-attr='baz' custom='qux' style='top:42px;'>
        <h1 class='text-right'>noi dung gi do ne</h1>
        `
      )}

      <button className='btn btn-primary' onClick={()=>setTestReload(true)}>set true for state </button>
      <button className='btn btn-warning' onClick={()=>setTestReload(!testReload)}>Toggle </button>
    </div>
  );
}
