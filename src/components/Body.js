import React from "react"


function Body()
{

    const [allmemes,setAllmemes]=React.useState([])
    const [formdata,setFormdata]=React.useState({
      topText:"",
      bottomText:"",
      randomimage:"http://i.imgflip.com/1bij.jpg"
    })
    console.log(formdata);
    React.useEffect(()=>
   {
     fetch("https://api.imgflip.com/get_memes")
     .then(res=>res.json())
     .then(result=>setAllmemes(result.data.memes))
   },[])

   function handleClick()
   {
       const random=Math.floor(Math.random()*100);
       const u=allmemes[random].url;
       console.log(u);
       setFormdata((prevState)=>
       {
           return(
               {
                   ...formdata,
                   randomimage:u
               }
           )
       })
   }
   function handleChange(event)
   {
    return(
        setFormdata((prevData)=>
        {
            return(
                {
                    ...prevData,
                    [event.target.name]:event.target.value
                }
            )
        })
    )
   }
    return(
        <div className="formstyle">
            <form>
            <div className="input--style">
            <input 
           type="text"
           placeholder="Top Text"
           name="topText"
           value={formdata.topText}
           onChange={handleChange}
           />
           <input 
           type="text"
           placeholder="Bottom Text"
           name="bottomText"
           value={formdata.bottomText}
           onChange={handleChange}
           />
            </div>
           <button type="button" className="btn" onClick={handleClick}>Get a new Meme Image</button>
       </form>
       <div className="meme">
           <img src={formdata.randomimage} className="meme--image" />
           <h2 className="meme--text top">{formdata.topText}</h2>
           <h2 className="meme--text bottom">{formdata.bottomText}</h2>
        </div>
        </div>
    )
}

export default Body