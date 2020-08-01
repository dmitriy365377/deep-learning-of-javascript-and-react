import React from 'react';
import './App.css';
import cross from './images/signs.svg';

import { emojify } from 'react-emojione';
import { TextArea } from './TextArea';

const items = [
    { id: 0, emoji: emojify('😉'), text: 'Долго комплектуют' },
    { id: 1, emoji: emojify('😉'), text: 'Менеджер медленно отвечает' },
    { id: 2, emoji: emojify('😉'), text: 'Грубый менеджер' },
    { id: 3, emoji: emojify('😉'), text: ' «Тупит» сайт' },
    { id: 4, emoji: emojify('😉'), text: 'Высокая цена' },
    { id: 5, emoji: emojify('😉'), text: 'Качество товара' },
    { id: 6, emoji: emojify('😉'), text: 'Долгая доставка ТК' }
];

class ModalWindow extends React.Component {

    constructor() {
        super()
        this.state = {
            values: [],
            textAreaField: false
        }
        this.showTextArea = () => {
            this.setState(prevState => ({
                textAreaField: !prevState.textAreaField,
            }));
        }
    }

    handleButton = button => {
        if (this.state.values.includes(button)) {
          this.setState({
            values: this.state.values.filter(el => el !== button)
          })
        }
    }
    render() {
        return (
            <div className="popup-container">
                <div className="popup-container-1">
                    <div className="popup-container-2">
                        <div className="popup-container-3">
                            <div className="header-container">
                                <span className="header-container-text">Пожаловаться</span>
                                <p>100% оценок читает руководитель компании</p>
                                <span className="header-container-cross">
                                    <img src={cross} />
                                </span>
                            </div>
                            <form>
                                <div className="selection">
                                    {items.map((item, id) => {
                                        return (
                                            <button className="selection-button"
                                            type="button"
                                             key={item.id}
                                             onClick={() => this.handleButton(item.id)}
                                             className={this.state.values.includes(item.id) ? "buttonPressed" : "button"}> 
                                                {item.emoji} 
                                                 
                                                {item.text}
                                               
                                            </button>
                                        )
                                    })}
                                </div>
                                <div classNam='text-boss' style={{ padding: 24 }} >
                                    <span onClick={this.showTextArea} className='term'>+ Сообщение руководителю</span>
                                    {this.state.textAreaField && <TextArea />}
                                </div>

                                <div className='clientFeedback'>
                                    <button>Отправить</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
// class ResumeTypes extends React.Component {

//     constructor(props) {
//         super(props);
//         //this.handleChange = this.handleChange.bind(this);
//         this.state = {
//             selectedButton: null
//         }
//     }

//     buttonSelected = selectedButton => ev => {
//         this.setState({ selectedButton })
//     }

//     render() {
//         return (
//             <div>
//                 {['A', 'B', 'C'].map(key => 
//                     <button className={key === this.state.selectedButton ? 'selected' : ''} type="button" style={{ width: '25%', border: "none" }} key={key} onClick={this.buttonSelected(key)}>{key}</button>
//                 )}
//             </div>
//         )
//     }
// } 
 

 



export { ModalWindow }