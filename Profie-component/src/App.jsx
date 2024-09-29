
import Profile from './components/Profile';
import "./App.css"

function App() {
  return (
    <div className="App">
      <Profile
        name="Rita Correia"
        age="32"
        location="London"
        followers="80K"
        likes="803K"
        photos="1.4K"
        avatar="https://via.placeholder.com/100"
      />
    </div>
  );
}

export default App;




// import './App.css'

// function App() {

//   return (
//     <>
//       <ProfileComponent />
//     </>
//   )
// }

// function ProfileComponent(){
//   const profileData = {
//     name: 'John Doe',
//     age: 25,
//     occupation: 'Software Engineer',
//     location: 'New York',
//   };

//   return <div style={styles.container}>
//     <h2>Profile </h2>
//     <p><strong>Name :</strong>{profileData.name}</p>
//     <p><strong>Age :</strong>{profileData.age}</p>
//     <p><strong>Occupation :</strong>{profileData.occupation}</p>
//     <p><strong>Location :</strong>{profileData.location}</p>
//   </div>
// }
// const styles = {
//   container: {
//     border: '1px solid #ddd',
//     padding: '15px',
//     borderRadius: '10px',
//     maxWidth: '300px',
//     margin: 'auto',
//   },
// };

// export default App
