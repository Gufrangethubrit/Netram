import React from "react";

export default function Breadcrum({title}: {title: string}) {
  return (
    <section className="breadcrumb-section">
      <div className="container">
        <div className="breadcrumb-content">
          <h1>{title}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb custom-breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {title}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
