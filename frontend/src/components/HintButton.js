import handleSounds from "../utils/sounds"

const HintButton = ({ secretCode }) => (
  <button className="btn btn-info" onClick={() => handleSounds(secretCode[0], 0)}>Hint</button>
)

export default HintButton