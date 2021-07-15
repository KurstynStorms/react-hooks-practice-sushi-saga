import React, {useState} from "react"
import MoreButton from "./MoreButton"
import Sushi from "./Sushi"

function SushiContainer({ sushis, onEatSushi }) {
  const [sushiIndex, setSushiIndex] = useState(0)

  const sushiComponents = sushis
  .slice(sushiIndex, sushiIndex + 4)
  .map((sushi) => (
    <Sushi 
    key={sushi.id}
    sushi={sushi}
    onEatSushi={onEatSushi}
    />
  ))

const handleClickMore = () => {
  setSushiIndex((sushiIndex) => (sushiIndex + 4) % sushis.lenth)
}

  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton onClickMore={handleClickMore} />
    </div>
  )
}

export default SushiContainer
