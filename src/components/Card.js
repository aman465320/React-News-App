import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="row mt-5 d-flex justify-content-center align-items-center flex-column g-3">
        <div className="container upper-card-div col-lg-5 col-md-8 col-sm-11 d-flex justify-content-center align-items-center flex-column ">
          <div className="card card-div d-flex p-1" style={{ width: "100%" }}>
            <img
              src={props.imageUrl}
              className="card-img-top img-responsive img-fluid"
              alt="..."

            />
            <div className="card-body">
              <a
                href={props.titleUrl}
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}

              >
                {" "}
                <h5 className="card-title mb-3">{props.title}</h5>{" "}
              </a>
              <p className="card-text">{props.content}</p>
              <p className="card-detail">
                By <strong>{props.author}</strong> on {props.date} at{" "}
                {props.time}
              </p>
              <a href={props.url} className="card-button btn btn-primary" target="_blank">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
