import "./Cover.css"
import SocksOff from "/SocksOff.png"
const AFrontPage = () => {
  return (
    <div className="top-0 left-0 fixed w-screen h-full  bg-[#111422]">
        <p className="underConstruction font-Sixtyfour-Regular-VariableFont">
             Patience Please
           <br />
             I am Building
             <br />
             A new App
             <br />
             For sending and receiving
             <br />
             encrypted messages
             <br />
             In a Secure way
        </p>
        <img src={SocksOff} alt="NeverMind" className="relative flex m-auto"/>
        
    </div>
  )
}

export default AFrontPage