import { Fragment } from "react"


function BreadCrumbs() {
  return (
    <Fragment>
      <div className="mx-auto text-center">
          <a>Home</a>
          <a style={{color: "#009649"}}> &#62; </a>
          <a>Greece</a>
          <a style={{color: "#009649"}}> &#62; </a>
          <a>packages</a>
        </div>
    </Fragment>
  );
}

export default BreadCrumbs;