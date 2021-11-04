import React from "react";
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';

const Nav = () =>(

      <nav>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>|
          <NavLink to="/Contact#email" activeClassName="active">Contact</NavLink>|
          <NavLink exact to="/Products" activeClassName="active">Products</NavLink>
          <NavLink to="/Products/9?orderby=price" activeClassName="active">Product-Det-9</NavLink>
      </nav>
  
  );
  
  const Header = () =>(
      <header>
          <h1>GitHub Finder</h1>
      </header>
  );
  
  const MyFooter = () =>(
      <footer>
          
              <i>Made by Furu</i>
          
      </footer>
  );
  
  const HomePage =()=>(
      <>
      <div>Home Page</div>
      
      </>
  );
  
  
  const ContactPage =(props)=>{
      console.log(props);
      return(
        <>
        <div>Contact Page</div>
        
        </>
      );
     
  }
  const ProductsPage =()=>(
      <>
      <div>Products Pageeeee</div>
      
      </>
  );

const ProductsDetailPage =(props)=>{
    console.log(props); 
    return (
      <>
       <div>Products Detail Pageee</div>
       <div>{props.match.params.id}</div>
      </>
      );
};
  
  const NotFoundPage =()=>(
      <>
      <div>Not-Found Page</div>
      
      </>
  );
  
const AppRouter = () => ( 
    <BrowserRouter>
        <Header/>
        <Nav/>
        
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/Contact" component={ContactPage}/>
            <Route exact path="/Products" component={ProductsPage}/>
            <Route path="/Products/:id" component={ProductsDetailPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
        <MyFooter/>
    </BrowserRouter>
    );

export default AppRouter;