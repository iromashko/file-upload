import FileUpload from './components/FileUpload';

import './App.css';

function App() {
  return (
    <div className='container mt-4'>
      <h4 className='display-4 text-center mb-4'>
        <i className='fab fa-node mr-4'></i>File Upload
      </h4>

      <FileUpload></FileUpload>
    </div>
  );
}

export default App;
