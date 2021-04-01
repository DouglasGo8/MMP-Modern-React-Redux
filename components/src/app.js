import React from "react";

import "./app.css";

import faker from "faker";

import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";

const app = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        A message in a bottle
        <div className="ui">What?</div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name="Sam"
          time="Today at 6:00PM"
          comment="Nice blog post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name="Alex"
          time="Today at 4:12PM"
          comment="React.js is Awesome"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name="Jane"
          time="Today at 8:55AM"
          comment="Do you known Apache Camel?"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

export default app;
