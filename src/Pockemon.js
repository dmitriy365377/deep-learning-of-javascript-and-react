import React, { memo, Component } from 'react'
import './App.css';

function isEqual(obj1, obj2) {
    return Object.keys(obj1).every(key => { 
        return obj1[key] === obj2[key];
    });
}

// a = {
//     x: 1,
//     y: 2,
// }

// b = {
//     x: 1,
//     y: 2,
// }

class Pockemon extends React.PureComponent {

    // shouldComponentUpdate(nextProps) {
    //     nextProps.programs.map(({ id }) => id);
    //     this.props.programs.map(({ id }) => id);
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return !isEqual(this.props, nextProps) && !isEqual(this.state, nextState)
    // }
    
    render() {
        // this.forceUpdate();
        const { caught, name, id, handelChange } = this.props
        console.log(name);
        return (
            <div className={caught ? 'circle-red' : 'circle'}>
                <div className='pokemon-name'>{name}</div>
                <img className="pockemon-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="Logo" />
                <button onClick={() => handelChange(id)} className='catch'>{caught ? 'Отпустить' : 'Поймать'}</button>
            </div>
        )
    }
}

export default Pockemon;



// const Pokemon = ({name,id,handelChange,caught}) => {
//     console.log(name);
//     return (<div className={caught ? 'circle-red' : 'circle'}>
//         <div className='pokemon-name'>{name}</div>
//         <img className="pockemon-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="Logo" />
//         <button onClick={() => handelChange(id)} className='catch'>{caught ? 'Отпустить' : 'Поймать' }</button>
//     </div>
//     )
// }


