import { CoffeeList } from '../../../../components/Coffees'
import { CoffeeCard } from '../../../../components/CoffeeCard'
import { CoffeeWrapper, OurCoffeeContainer } from './styles'

export const OurCoffee = () => {
  return (
    <OurCoffeeContainer>
      <h2>Nossos Cafés</h2>
      <CoffeeWrapper>
        {CoffeeList.map((coffee, idx) => {
          return <CoffeeCard Coffee={coffee} key={idx} />
        })}
      </CoffeeWrapper>
    </OurCoffeeContainer>
  )
}
