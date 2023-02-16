import React from 'react'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'


const EmployeeSatisfactionPage = () => {

    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');
    const [answer5, setAnswer5] = useState('');
    const [answer6, setAnswer6] = useState('');
    const [answer7, setAnswer7] = useState('');
    const [answer8, setAnswer8] = useState('');
    const [answer9, setAnswer9] = useState('');
    const [answer10, setAnswer10] = useState('');
    const [index, setIndex] = useState('');
    const history = useHistory();

    const submitToPortal = (e) => {
        e.preventDefault();
        
        if(answer1 === ''){
            alert("Question 1 is mandatory !");
            return false
         }else if(answer2 === ''){
            alert("Question 2 is mandatory !");
            return false
         }else if(answer3 === ''){
            alert("Question 3 is mandatory !");
            return false
         }else if(answer4 === ''){
            alert("Question 4 is mandatory !");
            return false
         }else if(answer5 === ''){
            alert("Question 5 is mandatory !");
            return false
         }else if(answer6 === ''){
            alert("Question 6 is mandatory !");
            return false
         }else if(answer7 === ''){
            alert("Question 7 is mandatory !");
            return false
         }else if(answer8 === ''){
            alert("Question 8 is mandatory !");
            return false
         }else if(answer9 === ''){
            alert("Question 9 is mandatory !");
            return false
         }else if(answer10 === ''){
            alert("Question 10 is mandatory !");
            return false
         }
         
         const answer = {answer1, answer2, answer3, answer4, answer5, answer6,
                              answer7, answer8, answer9, answer10}
            
                
         EmployeeService.saveResponse(answer).then((resp) => {
                alert(resp.data)
                setIndex(resp.data)
                let path = `/`;
                history.push(path);
             
                }).catch(error => {
                    console.log(error)
                })

        
    }

    const resetForm = (e) => {
        e.preventDefault();
        if(answer1!==''){
           setAnswer1('');
        }
        if(answer2!==''){
           setAnswer2('');
        }
        if(answer3!==''){
            setAnswer3('');
        }
         if(answer4!==''){
            setAnswer4('');
         }
         if(answer5!==''){
            setAnswer5('');
         }
         if(answer6!==''){
            setAnswer6('');
         }
         if(answer7!==''){
            setAnswer7('');
         }
         if(answer8!==''){
            setAnswer8('');
         }
         if(answer9!==''){
            setAnswer9('');
         }
         if(answer10!==''){
            setAnswer10('');
         }
        
    }

    useEffect(() => {
        setAnswer1('')
        setAnswer2('')
        setAnswer3('')
        setAnswer4('')
        setAnswer5('')
        setAnswer6('')
        setAnswer7('')
        setAnswer8('')
        setAnswer9('')
        setAnswer10('')
    }, [])


    return (
        <div>
        <br /><br />
        
        <div className = "container">
        
             <div className = "row">
               <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <div className = "navbar-brand">
                        
                        Please fill your answer as :- yes/no/sometime
                        
                    </div>

                </nav>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <div className = "navbar-brand">
                        
                        Employee Satisfaction Index : {index}
                        
                    </div>

                </nav>
                 
                 <div className = "card col-md-6 offset-md-3 offset-md-3">
                 
                     <div className = "card-body">
                        
                         <form>
                             <div className = "form-group mb-2">
                                <label className = "form-label"> Do the tasks assigned to you by your supervisor help you grow professionally?</label>
                                <input
                                    type = "text"
                                    name = "answer1"
                                    className = "form-control"
                                    value = {answer1}
                                    onChange = {(e) => setAnswer1(e.target.value)}
                                >
                                </input>
                             </div>
                             <div className = "form-group mb-2">
                                <label className = "form-label"> do you get meaningful work?</label>
                                <input
                                    type = "text"
                                    name = "answer2"
                                    className = "form-control"
                                    value = {answer2}
                                    onChange = {(e) => setAnswer2(e.target.value)}
                                >
                                </input>
                             </div>
                             <div className = "form-group mb-2">
                                <label className = "form-label"> do you get challenging work?</label>
                                <input
                                    type = "text"
                                    name = "answer3"
                                    className = "form-control"
                                    value = {answer3}
                                    onChange = {(e) => setAnswer3(e.target.value)}
                                >
                                </input>
                             </div>
                             <div className = "form-group mb-2">
                                <label className = "form-label"> do you feel uphill at work?</label>
                                <input
                                    type = "text"
                                    name = "answer4"
                                    className = "form-control"
                                    value = {answer4}
                                    onChange = {(e) => setAnswer4(e.target.value)}
                                >
                                </input>
                             </div>
                             <div className = "form-group mb-2">
                                <label className = "form-label"> are you well paid for the work you do?</label>
                                <input
                                    type = "text"
                                    name = "answer5"
                                    className = "form-control"
                                    value = {answer5}
                                    onChange = {(e) => setAnswer5(e.target.value)}
                                >
                                </input>
                             </div>
                             <div className = "form-group mb-2">
                                <label className = "form-label"> do your opinions about work matter to your coworkers?</label>
                                <input
                                    type = "text"
                                    name = "answer6"
                                    className = "form-control"
                                    value = {answer6}
                                    onChange = {(e) => setAnswer6(e.target.value)}
                                >
                                </input>
                             </div>
                             <div className = "form-group mb-2">
                                <label className = "form-label"> do you get adequate amount of work?</label>
                                <input
                                    type = "text"
                                    name = "answer7"
                                    className = "form-control"
                                    value = {answer7}
                                    onChange = {(e) => setAnswer7(e.target.value)}
                                >
                                </input>
                             </div>
                             <div className = "form-group mb-2">
                                <label className = "form-label"> you don't look for another job outside the company?</label>
                                <input
                                    type = "text"
                                    name = "answer8"
                                    className = "form-control"
                                    value = {answer8}
                                    onChange = {(e) => setAnswer8(e.target.value)}
                                >
                                </input>
                             </div>
                             <div className = "form-group mb-2">
                                <label className = "form-label"> do you feel respected?</label>
                                <input
                                    type = "text"
                                    name = "answer9"
                                    className = "form-control"
                                    value = {answer9}
                                    onChange = {(e) => setAnswer9(e.target.value)}
                                >
                                </input>
                             </div>
                             <div className = "form-group mb-2">
                                <label className = "form-label"> do you like your work?</label>
                                <input
                                    type = "text"
                                    name = "answer10"
                                    className = "form-control"
                                    value = {answer10}
                                    onChange = {(e) => setAnswer10(e.target.value)}
                                >
                                </input>
                             </div>

                             <div>
                               <button className = "btn btn-success" 
                                 onClick = {(e) => submitToPortal(e)} >
                                     Submit 
                               </button>&nbsp;&nbsp;
                               <button className = "btn btn-success" 
                                 onClick = {(e) => resetForm(e)} >
                                     Reset 
                               </button>
                             </div>
                             
                         </form>

                     </div>
                 </div>
             </div>

        </div>

     </div>
    )
}

export default EmployeeSatisfactionPage
