import React, { useState, useCallback, useEffect } from 'react';
import './App.css';
import Pokemon from './Pockemon.js'
import A from './a.js'
// https://pokeapi.co/api/v2/pokemon?offset=0&limit=12


// Если нового клиента не регистрируют через форму, то по закрытию окна виджета - запрашивать комментарий менеджера "Почему не зарегистрировали клиента на сайте?" и еще раз предлагать эту кнопку.




const POKEMONS_PER_PAGE = 6;

function fetchPokemons(page) {
  const arrayOfFetch = fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * POKEMONS_PER_PAGE}&limit=${POKEMONS_PER_PAGE}`)
  .then(response => response.json())
  .then(obj => obj.results.map(el => ({
    name: el.name,
    id: el.url.slice(34,-1)
  })))
  return arrayOfFetch
}

// function fn() {
//   console.log(this);
// }

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       page: 1,
//       saveId: [],
//       pokemons: []
//     }

//     // this.changeButton = App.prototype.changeButton.bind(this);
//     // this.changeButton = this.__proto__.changeButton.bind(this);
//     this.changeButton = this.changeButton.bind(this);
//   }

//   componentDidMount() {
//     const { page } = this.state
//     fetchPokemons(page).then(data => {
//       this.setState({
//         pokemons: data
//       })
//     })
//   }

//   componentDidUpdate(_, prevState) {
//     const { page } = this.state
//     if(this.state.page !== prevState.page){
//       fetchPokemons(page).then(data => {
//         this.setState({
//           pokemons: data
//         })
//       })
//     }
//   }

//   handelChange(id) {
//     this.setState(({ saveId }) => ({
//       saveId: saveId.includes(id)
//         ? saveId.filter(savedId => savedId !== id)
//         : [...saveId, id],
//     }))
//   }

//   changeButton(e) {
//     const { dir } = e.currentTarget.dataset;
//     this.setState(({ page }) => {
//       if (dir === "prev") {
//         return {
//           page: page - 1
//         }
//       } else if (dir === "next") {
//         return {
//           page: page + 1
//         }
//       }
//     })
//   }
  
//   render() {
//     const {page,saveId,pokemons} = this.state
//     console.log(this);
//     //   <div className="container">
//     //   <div className="title">Поймано покемонов</div>
//     //   <div className="page">{page}</div>
//     //   <div className="count">{`${saveId.length}/${pokemons.length}`}</div>
//     //   <div className="container-circle">
//     //     {pokemons.map((pock) => <Pokemon caught={saveId.includes(pock.id)} key={pock.id} name={pock.name} id={pock.id} handelChange={this.handelChange}/>)}
//     //   </div>
//     //   <button data-dir="prev" disabled={this.state.page === 1} onClick={this.changeButton}>Prev</button>
//     //   <button data-dir="next" onClick={this.changeButton}>Next</button>
//     //  </div>
//     return (
//       <A/>
//     )
//   }
// }



// // const obj = App.prototype; // ???
// // console.log('changeButton', obj.changeButton);

// export default App

const arr = ['Астрахань', 'Абакан', 'Анапа', 'Азов', 'Ангарск',
  'Барнаул', 'Белгород', 'Батайск', 'Брянск', 'Бор',
  'Воронеж', 'Вологда', 'Волгоград', 'Владивосток', 'Владимир',
  'Гатчина', 'Георгиевск', 'Грозный', 'Губкин', 'Гуково',
  'Дзержинск', 'Дмитров', 'Долгопрудный', 'Домодедово', 'Дубна',
]

function findPromiseCity(str) {
  return new Promise((resolve) => {
    const findCity = arr.filter((item) => item.toLowerCase().startsWith(str.toLowerCase()));
    setTimeout(() => resolve(findCity), 500)
  });
}

// findPromiseCity('до').then(console.log);

const debounce = (fn, ms) => {
  let isPlaying = false
  return function (...args) {
    if (isPlaying) return
    fn(...args)
    isPlaying = true
    setTimeout(() => isPlaying = false, ms)
  }
}

const App = (arr) => {
  const [page, setPage] = useState(1)
  const [saveId, setSaveId] = useState([])
  const [pokemons, setPokemons] = useState([])
  const [city,setCity] = useState([])

  useEffect(() => {
    fetchPokemons(page).then(setPokemons);
  }, [page]);


  const handelChange = useCallback((id) => {
    setSaveId((prev) => {
      if (prev.includes(id)) {
        return prev.filter(savedId => savedId !== id);
      } else {
        return [...prev, id];
      }
    });
  }, []);

  const changeButton = (e) => {
    const { dir } = e.currentTarget.dataset;
    setPage((prev) => {
      if (dir === "prev") {
        return prev - 1
      } else if (dir === "next") {
        return prev + 1
      }
    })
  }

  const searchCity = debounce((event) => {
    const inputCity = event.target.value
    findPromiseCity(inputCity).then(result => {
      setCity(result)
    })
  }, 10000)

  return (
    <div className="container">
      <div className="title">Поймано покемонов</div>
      <div className="page">{page}</div>
      <p>Выберите любимого персонажа:</p>

        <p><input list="character" onChange={searchCity}></input>
          <datalist id="character">{city.map(ct => {
            return (
              <option value={ct}></option>
           )
          })}
           </datalist>
        </p>

      <div className="count">{`${saveId.length}/${pokemons.length}`}</div>
      <div className="container-circle">
        {pokemons.map((pock) => <Pokemon caught={saveId.includes(pock.id)} key={pock.id} name={pock.name} id={pock.id} handelChange={handelChange} />)}
      </div>
      <button data-dir="prev" onClick={changeButton}>Prev</button>
      <button data-dir="next" onClick={changeButton}>Next</button>
    </div>
  )
}

export default App;




 