import { HiCheckCircle } from "react-icons/hi2";

const Result = ({ result }) => {
  const locationArray  = new Array(result.location)
  locationArray.fill(0)
  const digitArray = new Array(result.digit)
  digitArray.fill(0)


  return (
    <div className="flex flex-column text-amber-50">
      <div>
        {locationArray.map((circle, index) => <HiCheckrCircle className="bg-amber-50" key={index}/>)}
      </div>
      <div>
        {result.digit}
      </div>
    </div>

  )
}

export default Result