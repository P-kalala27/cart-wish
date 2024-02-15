/* eslint-disable react/jsx-key */
import { items, items2 } from '../../constante';
import FeatureProduct from './FeatureProduct';
import HeroSection from './HeroSection';


const HomePage = () => {
  return (
    <div>
        {
            items.map(e => (
                <HeroSection title={e.title} text={e.text} link={e.link} img={e.imgUrl}/>
            ))
        }
        <FeatureProduct/>
        {
            items2.map(e =>(
                <HeroSection title={e.title} text={e.text} img={e.imgUrl} link={e.link}/>
            ))
        }
    </div>
  )
}

export default HomePage