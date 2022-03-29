import Navbar from './components/Navbar';
import Card from './components/Card';
import travelData from './travelData';

function App() {
  const travelDatas = travelData.map((data) => {
    return <Card details={data} />;
  });

  return (
    <div className="font-inter-regular">
      <Navbar />
      {travelDatas}
    </div>
  );
}

export default App;
