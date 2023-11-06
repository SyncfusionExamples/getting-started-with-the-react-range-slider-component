import { SliderComponent } from '@syncfusion/ej2-react-inputs';
import './App.css';

function App() {
  return (
    <div className="App">
     <SliderComponent value={[30,70]} type='Range' 
     tooltip={{isVisible:true, showOn:'Always',placement:'After'}}
     ticks={{smallStep:10,largeStep:20,showSmallTicks:true,placement:'After'}}
     showButtons={true} 
     limits={{enabled:true,minStart:10,minEnd:30,maxStart:40,maxEnd:60}}
      ></SliderComponent>
    </div>
  );
}

export default App;
