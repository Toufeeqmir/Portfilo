import React , {useState} from "react";

export default function ContaxtForm(){

     const [formData , setFormData] = useState({

        name: "",
        eamil: "",
        message: ""
     });

     const handleChange = (e) =>{
         setFormData({... formData , [e.target.name]: e.target.value});
        
     };

     const handleSubmit = (e) => {
         e.preventDefault();
         console.log("Form submitted:", formData);
         alert("Form submitted successfully");
     };

     return(
         <div>
            <form  
            onSubmit={handleSubmit}>
                 <h2>Contact Form</h2>

                 <div>

                    <label htmlFor="Name">Name</label>
                    <input type="text"
                     name = "name"
                     value = {formData.name}
                     onChange={handleChange}
                     placeholder="Enter your name"
                     required
                    
                    />
                 </div>
                  
                  <div>
                    <label htmlFor="Email">Email</label>
                     <input type="email" name="email"
                     value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-xl" 
                      placeholder="Enter your name"
                      required
                      />
                      
                  </div>

                  <div>
                    <label htmlFor="Message">Message</label>
                    <textarea name="message" value={formData.mesaage}
                     onChange={handleChange}
                     className="w-full p-2 border rounded-xl"
                      rows= "5"
                      required>


                    </textarea>
                  </div>
                  <button type="submit">Submit</button>
            </form>
         </div>
     );
}