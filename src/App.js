import { useState } from "react";

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {

  return <div >
    
    <Steps />
    
  </div>
}

function Steps() {
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(true);

  function hanldePrevious() {
    if (step <= 0 ) return;
    setStep(s => s - 1);
  }

  function hanldeNext() {
    if (step >= 2) return;
    setStep(s => s + 1);
  }

  return <div>
    <button className="close" onClick={()=>setOpen(!open)} >&times;</button>

    {open&&< div className="steps">

      <div className="numbers">
        <div className={`step-1 ${step >= 0 ? 'active' : ''}`}>1</div>
        <div className={`step-2 ${step >= 1 ? 'active' : ''}`}>2</div>
        <div className={`step-3 ${step === 2 ? 'active' : ''}`}>3</div>
      </div>

      <StepMessage step={step} />
      <div className="buttons">
        <Buttons bgColor='#7950f2' textColor='#fff' onClick={hanldePrevious}>👈Previous</Buttons>
        <Buttons bgColor='#7950f2' textColor='#fff' onClick={hanldeNext}>Next👉</Buttons>

      </div>
    </div>
    }
  
        </div>
    
}
function Buttons({bgColor,textColor,children,onClick}) {
  return <button onClick={onClick} style={{bgColor,textColor}}>{children}</button>
}

function StepMessage({step}) {
  return <div className="message">
  
      <p>step1 : {messages[step]}</p>  
  
  
  </div>
}

