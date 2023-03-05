import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";




const Home = () => {
  const [companyName, setCompanyName] = useState("");
  const [showImages, setShowImages] = useState(false);
  const [input, setInput] = useState("");
  const [completedSentence, setCompletedSentence] = useState("");

  const fetchData = async (input) => {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        prompt: `Complete this sentence: "${input}"`,
        model: 'text-davinci-002',
        max_tokens: 100,
        temperature: 1,
        n: 1,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
        },
      }
    );

    return response.data.choices[0].text;
  };

  async function handleClick() {
    try {
      const completedSentence = await fetchData(input);
      setCompletedSentence(completedSentence);
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    const name = "This project was developed for the NSBE hackathon to help minorities by providing them with access to trustworthy therapists who work on pro bono cases. The website also integrates an OpenAI API to provide users with a chatbot to ask general or inquisitive questions. Additionally, users can talk to like-minded individuals about their problems using webcams and microphones, and rate their experience at the end of a call. These ratings will be used to match users with similar levels to improve the user experience. We are committed to inclusivity and always strive to support those in need.";
    let interval;

    const updateCompanyName = () => {
      setCompanyName((prevName) => {
        const nextIndex = prevName.length + 1;
        return name.substring(0, nextIndex);
      });
    };

    const startTypingAnimation = () => {
      interval = setInterval(updateCompanyName, 25);
    };

    const stopTypingAnimation = () => {
      clearInterval(interval);
      setCompanyName(name);
      setShowImages(true);
    };

    startTypingAnimation();

    setTimeout(stopTypingAnimation, name.length * 25 + 100);

    return () => clearInterval(interval);
  }, []);

  return (

<div>

<div class="grid-container">
  <div class="grid-item">
    {/* <!-- Left column content goes here --> */}
    <div className="header">

           <h1 className="login">NSBE</h1>

           <img src={require("./Uoft.png")} className="image" alt="Uoft logo" />
         </div>

         <div className="company-name">
           <b>{companyName}</b>

         </div>

        {showImages && (
           <div className="image-container">
            <br></br>
             <img src={require("./people.jpg")} alt="people" />
           </div>
         )}

  </div>
  <div class="grid-item">

  <div class="suptop-row">
      {/* <!-- suptop row of right column content goes here --> */}
      <h2 className="head2"> Chat Bot</h2>
    </div>

    <div class="top-row">
      {/* <!-- Top row of right column content goes here --> */}
     
           <textarea
           
            value={input}
             onChange={(event) => setInput(event.target.value)}
            rows={10} cols={40} 
             placeholder="Type Here..."
             style={{ backgroundColor: "white", color: "black",  borderRadius: "10px", border: "1px solid black", padding: "10px"}}

             />
           
    </div>

    <div class="mid-row">
      {/* <!-- MId row of right column content goes here --> */}
      <button className="button" onClick={handleClick}>
             Complete Sentence
           </button>
    </div>

    <div class="bottom-row">
      {/* <!-- Bottom row of right column content goes here --> */}
      {completedSentence && (
             <div className="completed-sentence">Output: {completedSentence}</div>
       )}
    </div>
  </div>
</div>

</div>


  );
};

export default Home;

