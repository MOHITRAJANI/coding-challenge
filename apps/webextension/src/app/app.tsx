// import styles from './app.module.css';
import { Sidebar } from '@coding-challenge/ui';
export const timeDuration = [

  {
      Label: '15 min',
      value: 15
  },
  {
      Label: '30 min',
      value: 30
  },
  {
      Label: '45 min',
      value: 45
  },
  {
      Label: '1 hour',
      value: 60
  },
  {
      Label: '1.5 hour',
      value: 90
  },
  {
      Label: '2 hours',
      value: 120
  },
  {
      Label: '3 hours',
      value: 180
  },
  {
      Label: '4 hours',
      value: 240
  },
]

export function App() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      {/* Replace the below div with your sidebar component from @coding-challenge/ui! */}
      <Sidebar duration={timeDuration} ></Sidebar>
    </div>
  );
}

export default App;
