import { HiCheckCircle } from "react-icons/hi2";

const Result = ({ result }) => {
  const locationArray  = new Array(result.location)
  locationArray.fill(0)
  const digitArray = new Array(result.digit)
  digitArray.fill(0)
  
  return (
    <div className="flex flex-column text-amber-50 bg-slate-500">
      <div>
        {locationArray.map((circle, index) => <HiCheckCircle color="red" key={index}/>)}
      </div>
      <div>
        {digitArray.map((circle, index) => <HiCheckCircle color="grey" key={index}/>)}
      </div>
    </div>

  )
}

export default Result