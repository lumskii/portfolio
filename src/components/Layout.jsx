import React from "react";
import ModelBox from "./ModelBox";
import "./styles.css";
import Card from "./Card";

export default function Layout() {
  return (
    <div className="body">
      <div className="header"></div>
      <div className="main">
        <div className="block">
          <ModelBox
            height={'100%'}
            img={`https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            header={`This is the main-page`}
            text={`This is a test`}
          />
        </div>
        <div className="block">
          <Card
              title={'Jessica Parker'}
              status={'1 hour ago'}
              image1={'https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
              image2={'https://i.imgur.com/7D7I6dI.png'}
              description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?'}
            />
        </div>
        <div className="block">
          <Card
              title={'Jessica Parker'}
              status={'1 hour ago'}
              image1={'https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
              image2={'https://i.imgur.com/7D7I6dI.png'}
              description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?'}
          />
    
        </div>
        <div className="block">
            <Card
              title={'Jessica Parker'}
              status={'1 hour ago'}
              image1={'https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
              image2={'https://i.imgur.com/7D7I6dI.png'}
              description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?'}
            />
        </div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
      </div>
    </div>
    // <div className="main-layout">
    //   <div>
    //     <ModelBox
    //       className="main-box"
    //       height={"70vh"}
    //       img={`https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
    //       header={`This is the main-page`}
    //       text={`This is a test`}
    //     />
    //   </div>
    //   <div>
    //     <ul className="right-panel">
    //       <li>
    //         <Card
    //           title={'Jessica Parker'}
    //           status={'1 hour ago'}
    //           image1={'https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
    //           image2={'https://i.imgur.com/7D7I6dI.png'}
    //           description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?'}
    //         />
    //       </li>
    //       <li>
          
    //       </li>
    //       <li>
    //       <Card
    //           title={'Jessica Parker'}
    //           status={'1 hour ago'}
    //           image1={'https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
    //           image2={'https://i.imgur.com/7D7I6dI.png'}
    //           description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?'}
    //         />
    //       </li>
    //     </ul>
    //   </div>
    //   <div>
    //     <ul className="bottom-panel">
    //       <li>
    //       <Card
    //           title={'Jessica Parker'}
    //           status={'1 hour ago'}
    //           image1={'https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
    //           image2={'https://i.imgur.com/7D7I6dI.png'}
    //           description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?'}
    //         />
    //       </li>
    //       <li>
    //       <Card
    //           title={'Jessica Parker'}
    //           status={'1 hour ago'}
    //           image1={'https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
    //           image2={'https://i.imgur.com/7D7I6dI.png'}
    //           description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?'}
    //         />
    //       </li>
    //       <li>
    //       <Card
    //           title={'Jessica Parker'}
    //           status={'1 hour ago'}
    //           image1={'https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
    //           image2={'https://i.imgur.com/7D7I6dI.png'}
    //           description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?'}
    //         />
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
}
