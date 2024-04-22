import React from "react";
import ModelBox from "./ModelBox";
import "./styles.css";

export default function Layout() {
  return (
    <div className="main-layout">
      <div>
        <ModelBox
          className="main-box"
          height={"70vh"}
          img={`https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          header={`This is the main-page`}
          text={`This is a test`}
        />
      </div>
      <div>
        <ul className="right-panel">
          <li>
            <ModelBox
              width={"95%"}
              height={"31vh"}
              img={`https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              header={`Sample`}
            />
          </li>
          <li>
            <ModelBox
              width={"95%"}
              height={"31vh"}
              img={`https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              header={`Sample`}
            />
          </li>
          <li>
            <ModelBox
              width={"95%"}
              height={"31vh"}
              img={`https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              header={`Sample`}
            />
          </li>
        </ul>
      </div>
      <div>
        <ul className="bottom-panel">
          <li>
            <ModelBox
              width={'20vw'}
              height={'25vh'}
              img={`https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              header={`Sample`}
            />
          </li>
          <li>
            <ModelBox
            width={'20vw'}
            height={'25vh'}
              img={`https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              header={`Sample`}
            />
          </li>
          <li>
            <ModelBox
            width={'20vw'}
            height={'25vh'}
              img={`https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              header={`Sample`}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
