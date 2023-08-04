import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from './components/Body'

const Footer = () =>{
    return(
        <div className="footer">
            <h5>copyright</h5>
            <div className="footer-navitem">
                <ul>
                    <li>Address</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
      <Footer/>
    
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
