import React from "react";
import Item from "./containeritems/Item";
import Spinner from "../Spinner";
import "./Main-container.css";


// const studentId = window.location.href.split('/?')
// console.log(studentId)        TO USE OR GET URL FROM PATH

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      slicenum: 0,
      loading: false,
      er: false

      
    };
 

    // this.value = this.value.bind(this)
  }

  

 

  
  async componentDidMount() {
try {
  
  this.setState({loading:true})
  let url = `http://gateway.marvel.com/v1/public/characters?limit=21&offset=${this.state.slicenum}&ts=1&apikey=560cad3d40550d8a366041d9af707f0c&hash=36846fa943e4c702fb10e7dc969099b0`;
  let getdata = await fetch(url);
  let parsedData = await getdata.json();
console.log(parsedData);

  this.setState({
     article: parsedData.data.results ,
     loading:false
 
  });
} catch (error) {
  console.log(error)
  this.setState({er:true})
}
   


  }


  clickhandlerprev = async () => {
    this.setState({loading:true})

    let url = `http://gateway.marvel.com/v1/public/characters?limit=21&offset=${this.state.slicenum - 21}&ts=1&apikey=560cad3d40550d8a366041d9af707f0c&hash=36846fa943e4c702fb10e7dc969099b0`;
  let getdata = await fetch(url);
  let parsedData = await getdata.json();
    this.setState({ 
      slicenum: this.state.slicenum - 21 ,
      article: parsedData.data.results,
      loading:false
    });
  
  
  }

  clickhandlernext = async () => {
    this.setState({loading:true})
    let url = `http://gateway.marvel.com/v1/public/characters?limit=21&offset=${this.state.slicenum + 21}&ts=1&apikey=560cad3d40550d8a366041d9af707f0c&hash=36846fa943e4c702fb10e7dc969099b0`;
  let getdata = await fetch(url);
  let parsedData = await getdata.json();
  console.log(parsedData);
    this.setState({ 
      slicenum: this.state.slicenum + 21 ,
      article: parsedData.data.results,
      loading:false
    });
  }


  render() {
   if (this.state.er===true) return <h1 style={{color: "#efff00", marginLeft:450, marginTop:100}}>Error in fetching Data  <br />  Check Your Internet Connection</h1>;
    return (
      <>
        {/* <h1>Hello from main MainContainer</h1> */}
     
        <div className="row">
          {this.state.article.map((element) => {
            return (
              <div key={element.id}>
                <Item
                  // name={element.name.toUpperCase()}
                  img={
                    element.thumbnail.path + "." + element.thumbnail.extension
                  }
                  name={element.name}
                  // desc={element.description}
                  id={element.id}
                ></Item>{" "}
              </div>
            );
          })}
        </div>
        <div className="buttons">

          <div className="leftbutton">
            {" "}
            <button  onClick={this.clickhandlerprev}> Prev Page</button>{" "}
          </div>
        { this.state.loading && <Spinner></Spinner>}

          <div className="rightbutton">
            {" "}
            <button onClick={this.clickhandlernext}> Next Page</button>
          </div>

        </div>
      </>
    );
  }
}



export default MainContainer;
