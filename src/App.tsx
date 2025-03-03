import Batman from './assets/images/Batman.png';
import CaptainAmerica from './assets/images/CaptainAmerica.jpeg';
import Hulk from './assets/images/Hulk.jpg';
import IronMan from './assets/images/IronMan.jpg';
import SpiderMan from './assets/images/SpiderMan.jpg';
import Superman from './assets/images/Superman.jpg';
import Thor from './assets/images/Thor.jpg';
import MemoryGame from './components/MemoryGame';

export default function App() {
  return (
    <div className="h-[300px] w-[300px]">
      <MemoryGame
        images={[
          Superman,
          Batman,
          Hulk,
          CaptainAmerica,
          IronMan,
          Thor,
          SpiderMan
        ]}
      />
    </div>
  );
}
